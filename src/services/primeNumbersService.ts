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
		
		let roundedSqrtOfGivenNumber = Math.ceil(Math.sqrt(givenNumber));		
		let ret = true;
		for(let factor = 3; factor <= roundedSqrtOfGivenNumber; factor++) {
			let testOutput = givenNumber / factor;
			
			if(testOutput % 1 === 0) {
				console.log("R");
				return false;
			}
		}	
			
		this.primeNumbers.push(givenNumber);
		console.log("R2");
		return true;
	}
}

export const PRIME_NUMBER_SERVICES_BINDINGS = [  
	bind(TrialDivision).toClass(TrialDivision)  
];