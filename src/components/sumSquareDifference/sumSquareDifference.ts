import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

@Component({
    selector: 'sum-square-difference',
})
@View({	
    templateUrl: './components/sumSquareDifference/sumSquareDifference.html'
})

export class SumSquareDifference {
    constructor() {
        let sumOfSquares = 0;
        let squareOfSum = 0;
        
        console.log("STARTED");
        
        for(let i = 1; i <= 100; i++) {
            sumOfSquares += Math.pow(i, 2);
            squareOfSum += i;    
        }
        
        console.log("DONE");
        
        squareOfSum = Math.pow(squareOfSum,2);
        
        console.log("SUM of squares: ", sumOfSquares);
        console.log("Square of SUM: ", squareOfSum);
        console.log("DIFF: ", squareOfSum - sumOfSquares);
    }
}