import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { TrialDivision } from '../../services/primeNumbersService';

@Component({
    selector: 'largestPrimeFactor',
	injectables: [ TrialDivision ]
})
@View({	
    templateUrl: './components/largestPrimeFactor/largestPrimeFactor.html'
})


export class LargestPrimeFactor {
	private _trialDivision : TrialDivision;	
	isPrime : boolean;
	
	constructor(trialDivision: TrialDivision) {
		this.isPrime = false;
		this._trialDivision = trialDivision;
		
		let i = 2;
		let attemptCount = 0;
		
		// while(true) {
		// 	if(this._trialDivision.isPrime(i)) {
		// 		attemptCount++;
		// 	}
		// 	if(attemptCount == 10001)
		// 		break;
			
		// 	i++;
		// }
		
		// console.log(i);
	}
	
	isNumberPrime(givenNumber: number) {		
		if(givenNumber && givenNumber % 1 === 0) {
			this.isPrime = this._trialDivision.isPrime(givenNumber);
		}				
	}

}