import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  // while using Router, don't need this selector actually.
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
	
	heroes: Hero[];

	title = 'Tour of Heroes';
	
	selectedHero: Hero;
	
	constructor ( 
		private heroService: HeroService,
		private router: Router 
	) {}
	
	ngOnInit(): void {
		this.getHeroes();
	}
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	getHeroes(): void {
		// the heroService return Promise which is asynchronized, 
		// so need use then() to handle correct response
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	gotoDetail() : void {
		let link = ['/detail', this.selectedHero.id];
		this.router.navigate(link);
	}
	
	add(name: string): void {
		name = name.trim();
		if(!name) {return;}
		this.heroService.create(name)
						.then(hero => {
							this.heroes.push(hero);
							this.selectedHero = null;
						});
	
	}
	
	delete(hero: Hero): void {
		this.heroService
			.delete(hero.id)
			.then( () => {
				this.heroes = this.heroes.filter( h => h !== hero);
				if (this.selectedHero === hero) {
					this.selectedHero = null;
				}
			});
	}
	
}
