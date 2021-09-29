/* 01-----------------------Power---------------------------------------------------------------------
Write a function called power which accepts a base and an exponent. 
The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  
        - do not worry about negative bases and exponents.
*/
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(b, e) {
  //base case
  if (e === 0) return 1

  return b * power(b, e - 1);
}

console.log(power(2,0));
console.log(power(2,2));
console.log(power(2,4));


/* 02-----------------------productOfArray---------------------------------------------------------------------
Write a function called 'productOfArray' which takes in an array of numbers and 
returns the product of them all.
*/
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr){

let last = arr.length;

//base case
if (last === 0) return 0
if (last === 1) return arr[0]

return productOfArray([last - 1]) * arr[last - 1] 
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));


/* 03-----------------------reverse---------------------------------------------------------------------
Write a recursive function called 'reverse' which accepts a string and returns 
a new string in reverse.
*/
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
//base case
if (str.length <= 1) return str;

return reverse(str.slice(1)) + str[0];
}

console.log(reverse('awesome'));
console.log(reverse('fumina'));

/* 04-----------------------isPalindrome---------------------------------------------------------------------
Write a recursive function called 'isPalindrome' which returns true if the string 
passed to it is a palindrome (reads the same forward and backward). 
Otherwise it returns false.
*/
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
//base case
if(str.length <= 1) return str;

return isPalindrome(str.slice(1)) + str[0] === str
}

console.log(isPalindrome('awesome')); 
console.log(isPalindrome('tacocat')); 
console.log(isPalindrome('amanaplanacanalpanama')); 