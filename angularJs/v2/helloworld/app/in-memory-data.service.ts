import { Component } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

	createDb() {
		let heroes = [
			{id: 11, name: 'Mr. Nice'},
			{id: 12, name: 'Narco'},
			{id: 13, name: 'Bombasto'},
			{id: 14, name: 'Celerita'},
			{id: 15, name: 'Mageta'},
			{id: 16, name: 'RubberMan'},
			{id: 17, name: 'Dynama'},
			{id: 18, name: 'Dr QI'},
			{id: 19, name: 'Magma'},
			{id: 20, name: 'Tornado'}
		];
		
		return {heroes};
	}

}