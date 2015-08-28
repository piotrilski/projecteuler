import { Component, View, bootstrap, CORE_DIRECTIVES } from 'angular2/angular2';
import { Router, RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';

import { Home } from '../home/home';

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
	{ path: '/', as: 'home', component: Home }
])

export class App {
	constructor(){}
}