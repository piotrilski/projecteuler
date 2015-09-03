import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { Router, RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';
import { LocationStrategy, Location, HTML5LocationStrategy, HashLocationStrategy } from 'angular2/router'

import { Home } from '../home/home';
import { FibonacciEvenNumbers } from '../fibonacciEvenNumbers/fibonacciEvenNumbers.controller';

@Component({
	selector: 'app'
})
@View({
	templateUrl: './components/app/app.html',
	directives: [
		RouterOutlet,
		RouterLink
	]
})
@RouteConfig([
	{ path: '', redirectTo: '/fibonacci-even-numbers'},
	{ path: '/home', as: 'home', component: Home },
	{ path: '/fibonacci-even-numbers', as: 'fibonacci-even-numbers', component: FibonacciEvenNumbers}
])

export class App {
	constructor()	{
		
	}
}