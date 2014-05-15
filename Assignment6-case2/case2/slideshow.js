/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 6
   Case Problem 2

   Author:  Jiaju Shen
   Date: 3/16/2014   

   Filename: slideshow.js


   Global Variables:
  
   scrollButton
      References the scrolling button in the slide show

   diffX
      Stores the horizontal distance in pixels between the
      mouse pointer when the scrolling button is clicked
      and the left edge of the scrolling button.

   Functions List:

   setup()
      Initializes the contents of the Web page. Creates
      event handlers for the mouse and keyboard events

   grabIt(e)
      "Grabs" the scrolling button to set up the
       horizontal scrolling of the slide show

   moveIt(e)
      Moves the scrolling button horizontally through
      the scrollbar

   showSlide(x)
      Shows the image corresponding the to the x coordinate
      on the scrollbar

   dropIt(e)
      Drops the scrolling button after the user releases the
      mouse button

   keyShow(e)
      Uses the left and right arrow keys to move the scrolling
      button through the scrollbar

*/
var scrollButton;
var diffX;
window.onload = setup;
// step 7
function setup(){
	scrollButton = document.getElementById("button");
	scrollButton.style.top = getStyle(scrollButton,"top");
	scrollButton.style.left = getStyle(scrollButton,"left");
	scrollButton.style.cursor = "pointer";
	addEvent(scrollButton, "mousedown", grabIt, false);
	addEvent(document, "keydown", keyShow, false);
}	
// step 8
function grabIt(e){
	var evt = e || window.event;
	var mouseX = evt.clientX;
	diffX = parseInt(scrollButton.style.left)- mouseX + "px";
	addEvent(scrollButton, "mousemove", moveIt, false);
	addEvent(scrollButton, "mouseup", dropIt, false);
}
// step 9
function moveIt(e){
	var evt = e || window.event;
	var mouseX = evt.clientX;
	var buttonPosX = mouseX - diffX + "px";
	showSlide();
}
// step 10
function showSlide(x){
	if(x<20){
		x = 20;
	}
	if(x>299){
		x = 299;
	}
	scrollButton.style.left = x;
	var i = Math.floor((x-20)/31);
	document.getElementById("photo").src = "image" + i + ".jpg";
}
// step 11
function dropIt(e){
	removeEvent(scrollButton, "mousemove", moveIt, false);
}
// step 12
function keyShow(e){
	var evt = e || window.event;
	var key = event.keyCode;
	var buttonPosX = scrollButton.style.left;
	if(key == 37) buttonPosX -= 31;
	if(key == 39) buttonPosX += 31;
	showSlide(buttonPosX);
}




