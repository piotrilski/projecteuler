import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { Router, RouteConfig, RouterOutlet, RouterLink } from 'angular2/router';
import { LocationStrategy, Location, HTML5LocationStrategy, HashLocationStrategy } from 'angular2/router'

import { Home } from '../home/home';
import { FibonacciEvenNumbers } from '../fibonacciEvenNumbers/fibonacciEvenNumbers';
import { LargestPrimeFactor } from '../largestPrimeFactor/largestPrimeFactor';
import { LargestPalindromeProduct } from '../largestPalindromeProduct/largestPalindromeProduct';
import { SmallestMultiple } from '../smallestMultiple/smallestMultiple';
import { SumSquareDifference } from '../sumSquareDifference/sumSquareDifference';

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
	{ path: '', redirectTo: '/largestPalindromeProduct'},
	{ path: '/home', as: 'home', component: Home },
	{ path: '/fibonacci-even-numbers', as: 'fibonacci-even-numbers', component: FibonacciEvenNumbers},
	{ path: '/largest-prime-factor', as: 'largest-prime-factor', component: LargestPrimeFactor},
	{ path: '/largestPalindromeProduct', as: 'largest-palindrome-product', component: LargestPalindromeProduct},
	{ path: '/smallestMultiple', as: 'smallest-multiple', component: SmallestMultiple },
	{ path: '/sumSquareDifference', as: 'sum-square-difference', component: SumSquareDifference },
])

export class App {
	constructor()	{
		
	}
}