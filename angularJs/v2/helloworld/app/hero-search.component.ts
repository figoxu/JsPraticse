import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component ({
	moduleId: module.id,
	selector: 'hero-search',
	templateUrl: 'hero-search.component.html',
	styleUrls: [ 'hero-search.component.css' ],
	providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
	
	heroes: Observable<Hero[]>;
	private searchTerms = new Subject<string>();
	
	constructor(
		private heroSearchService: HeroSearchService,
		private router: Router
	) {}
	
	ngOnInit(): void {
		this.heroes = this.searchTerms
							// wait for 300ms pause in events
							.debounceTime(300)
							// ignore if next search term is same as previous
							.distinctUntilChanged() 
							// return search result if having input
							// or return an empty Observable
							.switchMap(term => 
								term? this.heroSearchService.search(term) : Observable.of<Hero[]>([])
							)
							.catch(error => {
								console.log(error);
								return Observable.of<Hero[]>([]);
							});
	}
	
	search(term: string): void {
		this.searchTerms.next(term);
	}
	
	gotoDetail(hero: Hero): void {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}

}