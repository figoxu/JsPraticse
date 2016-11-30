import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
	
	private header = new Headers({'Content-Type':'application/json'});
	private heroesUrl = 'app/heroes';
	
	constructor(private http: Http) {}

	getHeroes(): Promise<Hero[]> {
		// this is synchronized operation
		// return HEROES;
		
		// Use Promise to make it asynchronized
		// return Promise.resolve(HEROES);
		
		// Use Http to get heroes
		return this.http.get(this.heroesUrl)
				   .toPromise()
				   .then(response => response.json().data as Hero[])
				   .catch(this.handleError);
	}
	
	getHero(id: number): Promise<Hero> {
		return this.getHeroes().then( heroes => heroes.find(hero => hero.id === id ) );
	}
	
	update(hero: Hero): Promise<Hero> {
		// NOTE!!: url inside ` not '
		const url = `${this.heroesUrl}/${hero.id}`;
		return this.http
				   .put(url, JSON.stringify(hero), {headers: this.header})
				   .toPromise()
				   .then(() => hero)
				   .catch(this.handleError);
	}
	
	create(name: string): Promise<Hero> {
		return this.http.post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.header})
						.toPromise()
						.then(res => res.json().data)
						.catch(this.handleError);
	}
	
	delete(id: number): Promise<Hero> {
		const url = `${this.heroesUrl}/${id}`;
		return this.http
				   .delete(url, {headers: this.header})
				   .toPromise()
				   .then(() => null)
				   .catch(this.handleError);
	}
	
	handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}