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
	}
	
	isNumberPrime(givenNumber: number) {
		console.log("given N: ", givenNumber);
		
		if(givenNumber && givenNumber % 1 === 0) {
			this.isPrime = this._trialDivision.isPrime(121);
		}				
	}

}