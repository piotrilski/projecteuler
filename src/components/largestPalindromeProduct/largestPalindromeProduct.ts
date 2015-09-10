import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'largest-palindrome-product'
})
@View({
	templateUrl: './components/largestPalindromeProduct/largestPalindromeProduct.html',
	directives: [CORE_DIRECTIVES]	
})

export class LargestPalindromeProduct {
	isNumberPalindrome : boolean;
	largestPalindrome : number;
	palindromes : Array<PalindromeProduct>;
	
	constructor() {
		this.isNumberPalindrome = false;		
		this.palindromes = [];
	}
	
	getLargestPalindrome(numberOfDigits : number) {		
		this.palindromes = this.getListOfProductsMadeOfANumberOfDigits(
			numberOfDigits, 
			(nmb) => this.isPalindrome(nmb));

		let numbers = this.palindromes.map((p) => {
			return p.palindrome;
		});			
		
		this.largestPalindrome = Math.max(...numbers);
	}
	
	isGivenNumberPalindrome(givenNumber: number) {
		this.isNumberPalindrome = this.isPalindrome(givenNumber);		
	}	
	
	private reverse(givenString : string) : string {
		if (givenString.length < 2) {
			return givenString;
		}
		var halfIndex = Math.ceil(givenString.length / 2);
		
		return this.reverse(givenString.substr(halfIndex)) +
			   this.reverse(givenString.substr(0, halfIndex));
	}
	
	private isPalindrome(givenNumber: number) : boolean {
		let palindromeCandidate = givenNumber.toString();
		
		if(!palindromeCandidate || palindromeCandidate.length < 1) {
			return false;
		}
				
		let halfLength = Math.floor(palindromeCandidate.length / 2);
		let firstHalf = palindromeCandidate.slice(0, halfLength);
		let secondHalf = this.reverse(palindromeCandidate.slice(
							palindromeCandidate.length - halfLength,
							palindromeCandidate.length));
		
		//console.log('p: ', { l: palindromeCandidate.length, hl: halfLength, p1: firstHalf, p2: secondHalf });
			
		return firstHalf === secondHalf;
	}
	
	private getListOfProductsMadeOfANumberOfDigits(
		numberOfDigits : number, 
		canAdd: (number) => boolean) : Array<PalindromeProduct> {
		
		let list : Array<PalindromeProduct> = [];
		
		var startValue = Math.pow(10, numberOfDigits - 1);
		var endValue = Math.pow(10, numberOfDigits);
		
		for(let f = startValue; f < endValue; f++) {
			let pow = f*f;
			if(canAdd(pow)) {
				list.push(new PalindromeProduct(f,f,pow));
			}
			
			if(f+1 === endValue) {
				break;
			} else {
				for(let s = f+1; s < endValue; s++)
				{
					let nmb = f*s;
					if(canAdd(nmb)) {
						list.push(new PalindromeProduct(f,s, f*s));
					}
				}
			}
		}
		
		return list;
	}
}

class PalindromeProduct {
	palindrome : number;
	firstFactor : number;
	secondFactor: number;
	
	constructor(firstFactor : number, secondFactor : number, palindrome : number) {
		this.firstFactor = firstFactor;
		this.secondFactor = secondFactor;
		this.palindrome = palindrome;		
	}
}