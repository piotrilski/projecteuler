import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'fibonacci-even-numbers'
})
@View({	
    templateUrl: './components/fibonacciEvenNumbers/fibonacciEvenNumbers.html'
})

export class FibonacciEvenNumbers {
	constructor() {
        
	}
	
	
}

class FibonacciBuilder {
	private t0 : number = 1;
	private t1 : number = 2;
	
	private buildElement(firstElement: number, secondElement: number) : number {
		return firstElement + secondElement;
	}
	
	buildNumbersLessThanGiven(givenNumber: number): Array<number> {
		var fibonacciNumbers:Array<number>;
		
		if(givenNumber === this.t0) {
			fibonacciNumbers.push(this.t0);
		}
		
		if(givenNumber === this.t1) {
			fibonacciNumbers.push(this.t0);
			fibonacciNumbers.push(this.t1);
		}
	}
}