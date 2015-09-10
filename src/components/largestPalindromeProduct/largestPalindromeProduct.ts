import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
	selector: 'largest-palindrome-product'
})
@View({
	templateUrl: './components/largestPalindromeProduct/largestPalindromeProduct.html'	
})

export class LargestPalindromeProduct {
	isNumberPalindrome : boolean;
	
	constructor() {
		this.isNumberPalindrome = false;
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
	
	private getListOfProductsMadeOfANumberOfDigits(numberOfDigits : number) : Array<number> {
		let list : Array<number> = [];
		
		
		
		return list;
	}
}