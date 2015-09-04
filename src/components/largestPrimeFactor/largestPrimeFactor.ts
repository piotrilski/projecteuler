import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';
import { TrialDivision } from '../../services/primeNumbersService';
import { Inject } from 'angular2/di';

@Component({
    selector: 'largestPrimeFactor',
	injectables: [TrialDivision]
})
@View({	
    templateUrl: './components/largestPrimeFactor/largestPrimeFactor.html'
})


export class LargestPrimeFactor {
	private _trialDivision: TrialDivision;	
	
	constructor(trialDivision: TrialDivision){
		this._trialDivision = trialDivision;
		
		var prime = this._trialDivision.isPrime(121);
		console.log(prime);
	}
		
}