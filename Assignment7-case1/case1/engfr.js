/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Case Problem 1

   Author: Jiaju Shen
   Date: 3/30/2014    

   Filename: engfr.js


   Function List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   setUp()
      Insert the current week's french phrases into document and set up
      event handlers for the phrases.

   swapFE(phrase, pnum)
      Changes a French phrase to the English version of that phrase.

   swapEF(phrase, pnum)
      Changes an English phrase ot the Frech version of that phrase.

*/

addEvent (window, "load", setUp, false);

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}
function setUp() {
    var transDoc = document.getElementById("doc");
	var olElem = document.createElement("ol");
		for (var i = 0; i < french.length; i++){
	var newLI = document.createElement("li");
		newLI.innerHTML = french[i];
		newLI.id = i + "phrase";
		newLI.style.cursor = "pointer";
		addEvent(newLI, "mousedown", swapFE, false);
		addEvent(newLI, "mouseup", swapEF, false);
		olElem.appendChild (newLI);
		}
		transDoc.appendChild(olElem);
 }
function swapFE(event) {
	var phrase = event.target || event.srcElement;
		if (phrase.nodeName == "#text")
		phrase = phrase.parentNode;
		
	var phraseNum = parseInt(phrase.id);
		phrase.innerHTML = english[phraseNum];
		phrase.style.color = "rgb(155,102,102)";
		phrase.style.fontStyle = "italic";
}
function swapEF(event) {
	var phrase = event.target || event.srcElement;
		if (phrase.nodeName == "#text")
		phrase = phrase.parentNode;
 
	var phraseNum = parseInt(phrase.id);
		phrase.innerHTML = french[phraseNum];
		phrase.style.color = "rgb(0,0,0)";
		phrase.style.fontStyle = "normal";
}