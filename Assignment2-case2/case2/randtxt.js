/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 2

   Author: Jiaju Shen	
   Date: 2/4/2014  

   Function List:
   randInt(lower, upper)
      Used to generate a random integer in the range (lower, upper)

*/
function randInt(lower, upper){
	var size = upper-lower;
	return Math.floor(Math.random() * (size + 1)) + lower;

}
