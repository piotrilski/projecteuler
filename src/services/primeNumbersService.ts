import { bind } from 'angular2/angular2';

export interface IPrimeNumberService {
	primeNumbers? : Array<number>
	isPrime(givenNumber : number) : boolean;
}

export class TrialDivision implements IPrimeNumberService{
	
	primeNumbers: Array<number>;
	
	constructor() {
		this.primeNumbers = [2];
	}
	
	isPrime(givenNumber : number) : boolean {
		if(this.primeNumbers.indexOf(givenNumber) > -1) {
			return true;
		}
		
		var roundedSqrtOfGivenNumber = Math.ceil(Math.sqrt(givenNumber));		
		
		for(var factor = 3; factor <= roundedSqrtOfGivenNumber; factor++) {
			var testOutput = givenNumber / factor;
			console.log(testOutput);
			if(testOutput % 1 === 0) {
				return false;
			}
		}	
			
		this.primeNumbers.push(givenNumber);
		
		return true;
	}
}

export const PRIME_NUMBER_SERVICES_BINDINGS = [  
	bind(TrialDivision).toClass(TrialDivision)  
];