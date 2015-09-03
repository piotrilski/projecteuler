import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'largestPrimeFactor'
})
@View({	
    templateUrl: './components/largestPrimeFactor/largestPrimeFactor.html'
})

export class LargestPrimeFactor {
	constructor(){
		// var factors = this.getFactors(600851475143);
		// factors.forEach(f=> {
		// 	console.log({
		// 		factor: f,
		// 		isPrime: this.isPrime(f)	
		// 	});
		// });
				
		
		console.log("Smallest prime factor of 100: ", this.getSumOfSmpf(100));
		
		var s10to12 = this.getSumOfSmpf(1000000000000);
		console.log("s10to12: ", s10to12);
	}
	
	isPrime(givenNumber: number) : boolean {
		if(givenNumber === 2) {
			return true;
		}
			
		var roundedSqrtOfGivenNumber = Math.ceil(Math.sqrt(givenNumber));
		
		for(var factor = 2; factor<= roundedSqrtOfGivenNumber; factor++) {
			var det = (givenNumber / factor) % 1;
			
			if(det === 0 || det === 1) {
				return false;
			}
		}		
		
		return true;
	}
	
	getFactors(givenNumber: number) : Array<number> {
		var factors : Array<number> = [];
		
		for(var factor = 2; factor<=Math.ceil(Math.sqrt(givenNumber)); factor++) {
			var det = (givenNumber / factor) % 1;
			
			if(det === 0 || det === 1) {
				factors.push(factor);
			}
		}
		
		return factors;
	}
	
	getSumOfSmpf(givenNumber: number) : number {
		var smpfs:Array<number> = [];
		
		for(var n=2; n<=givenNumber; n++) {
			if((givenNumber % 2) % 1 === 0 || (givenNumber % 2) % 1 === 1) {
				smpfs.push(2)
			} else {
				smpfs.push(this.getSmallestPrimeFactor(n));
			}
		}		
		
		var sumOfSmpfs = 0;
		
		smpfs.forEach(p => {
			sumOfSmpfs = sumOfSmpfs + p 
		});
		
		return sumOfSmpfs;
	}
	
	getSmallestPrimeFactor(givenNumber: number) : number {		
		
		for(var factor = 2; factor<=Math.ceil(Math.sqrt(givenNumber)); factor++) {
			var det = (givenNumber / factor) % 1;
			
			if(det === 0 || det === 1) {				
				if(this.isPrime(factor)) {
					return factor;
				}
			}
		}
			
		return givenNumber;
	}
}