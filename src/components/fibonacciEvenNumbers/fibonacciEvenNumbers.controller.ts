import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'fibonacci-even-numbers'
})
@View({	
    templateUrl: './components/fibonacciEvenNumbers/fibonacciEvenNumbers.html'
})

export class FibonacciEvenNumbers {
	private _fibonacciBuilder: Fibonacci.FibonacciBuilder;
	
	constructor() {
		this._fibonacciBuilder = new Fibonacci.FibonacciBuilder();    
		this.sumOfEvenNumbers();    
	}	

	private sumOfEvenNumbers() : void {
		var fibonacci = this._fibonacciBuilder.buildNumbersLessThanGiven(4000000);
		var even = Fibonacci.extractEvenNumbers(fibonacci);
		var sum = 0;
		
		if(even) {
			even.forEach(e=> sum = sum + e);
		}		
		
		console.log(fibonacci);
		console.log(even);
		console.log(sum);
	}
}

module Fibonacci {
	// FibonacciExtensions 
	export function extractEvenNumbers(allNumbers: Array<number>): Array<number> {
		var evenNumbers:Array<number> = [];
		console.log(allNumbers);
		allNumbers.forEach(n=> {
			if(n % 2 === 0) {
				evenNumbers.push(n);
			}
		});
		
		return evenNumbers;
	}
	
	
	export class FibonacciBuilder {
		private t0 : number = 1;
		private t1 : number = 2;
		
		private buildElement(firstElement: number, secondElement: number) : number {
			return firstElement + secondElement;
		}
		
		public buildNumbersLessThanGiven(givenNumber: number): Array<number> {
			var fibonacciNumbers:Array<number> = [];
			
			if(givenNumber === this.t0) {
				fibonacciNumbers.push(this.t0);
			}
			
			if(givenNumber === this.t1) {
				fibonacciNumbers.push(this.t0);
				fibonacciNumbers.push(this.t1);
			}
			
			if(givenNumber > this.t1) {
				fibonacciNumbers = [this.t0, this.t1];
				
				var index = 2;
				
				while(true) {
					var nextEl = this.buildElement(fibonacciNumbers[index-2],fibonacciNumbers[index-1]);
					
					if(nextEl >= givenNumber || index>100) {
						break;
					}
					
					fibonacciNumbers.push(nextEl);
					
					index++;
				}
			}
			
			return fibonacciNumbers;
		}
	}
}

