import { Component, View, CORE_DIRECTIVES } from 'angular2/angular2';

@Component({
    selector: 'smallest-multiple',
})
@View({	
    templateUrl: './components/smallestMultiple/smallestMultiple.html'
})

export class SmallestMultiple {
	constructor() {        
             
        let i = 20;
        let divisors = this.createDivisors(1,i);
        let lcm = 1;
        
        divisors.forEach((divisor) => {            
            lcm = this.leastCommonMultiple(lcm, divisor);            
        });
        
        console.log(lcm);
    }
    
    private gratestCommonDivisor(a : number, b : number) : number {
        while(a !== b) {
            if(a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
        
        return a;
    }
    
    private leastCommonMultiple(a : number, b : number) : number {
        return a * b / this.gratestCommonDivisor(a,b);
    }
    
    private createDivisors(minDivisor : number, maxDivisor : number) : Array<number> {
        
        let list = new Array<number>();
        
        for(let i = minDivisor; i <= maxDivisor; i++) {
            list.push(i);
        }
        
        return list;
    }
    
    private isDividedByAllDivisors(givenNumber : number, divisors : Array<number>) : boolean {
        let ret = true;
        
        divisors.forEach((divisor) => {            
            if((givenNumber % divisor) !== 0) {
                ret = false;                
                return;
            }
        })
        
        return ret;
    }
}