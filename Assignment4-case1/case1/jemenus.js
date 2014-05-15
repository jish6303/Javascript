/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 4
   Case Problem 1

   Author: Jiaju Shen   
   Date: 2/19/2014     

   Filename:  jemenus.js

   -------------------------------------------------------------
   Function List:
   setTabs()
      Initializes the contents of the printer.htm Web page, locating
      the tab menus and assigning event handler to the tabs.

   showTab()
      Shows the currently-select tab menu, bring it to the top
      of the stack


   -------------------------------------------------------------
   Global Variable List:

   currentTab
      An object variable pointing to the currently selected tab
   
   maxZ
      A variable containing maximum z-index value among the tab lists

   -------------------------------------------------------------
*/
window.onload = setTabs;

var currentTab = null;
var maxZ = 1;

function setTabs() {

var menuTabs = new Array();
var allElems = document.getElementsByTagName("*");

for (var i = 0; i < allElems.length; i++) 
{
if (allElems[i].className == "tab") menuTabs.push(allElems[i]);
}
currentTab = menuTabs[0];

for (var i = 0; i < menuTabs.length; i++) 
{
menuTabs[i].onclick = showTab;
}

}

function showTab() {

currentTab.style.background = "white";

maxZ++;

var tabList = this.getElementsByTagName("ul")[0];
tabList.style.zIndex = maxZ;

currentTab = this;
currentTab.style.background = "rgb(221,221,255)";
}



