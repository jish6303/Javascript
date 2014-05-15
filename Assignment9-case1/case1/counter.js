/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 9
   Case Problem 1

   Author: Jiaju Shen          
   Date: 4/12/2014     

   Filename: counter.js



   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event handler to object where object is the object 
      reference, evName is the name of the event, fnName is the
      reference to the function, and cap specifies the
      capture phase.

   writeDateString(dateObj)
      Returns the date contained in the dateObj date object as
      a text string in the format mmm. dd, yyyy

   storeCookie(cName, cValue, expDate, cPath, cDomain, cSecure)
      Stores a cookie named cName with value cValue. Optional parameters
      expDate, cPath, cDomain, and cSecure set the expiry date,
      path, doman, and secure flag

   getCookie(cName)
      Returns the value of cookie, cName.

   setCounter()
      Retrieves and updates the date last visited and page counter
      cookies and displays them on the Web page along with the
      date last modified.

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}


function writeDateString(dateObj) {

   var monthName = new Array("Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul", "Aug", "Sep",
  "Oct", "Nov", "Dec");
	
   var thisMonth = dateObj.getMonth();
   var thisYear = dateObj.getFullYear();

   return monthName[thisMonth] + " " + dateObj.getDate() + ", " + thisYear;
}

function setCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {
   if (cName && cValue != "") {
      var cString = cName + "=" + escape(cValue);
      cString += (expDate ? ";expires=" + expDate.toGMTString(): "");
      cString += (cPath ? ";path=" + cPath : "");
      cString += (cDomain ? ";domain=" + cDomain : "");
      cString += (cSecure ? ";secure" : "");
      document.cookie = cString;
   }
}


function getCookie(cName) {
   if (document.cookie) {
      var cookies = document.cookie.split("; ");
      for (var i = 0; i < cookies.length; i++) {
         if (cookies[i].split("=")[0] == cName) {
            return unescape(cookies[i].split("=")[1]);
         }
      }
   }
}


/* Add new code below */
setCounter()
function addEvent(object, evName, fnName, cap) {
if (object.attachEvent)
object.attachEvent("on" + evName, fnName) ;
else if (object.addEventListener)
object.addEventListener(evName, fnName, cap) ;
}


function writeDateString(dateObj) {

var monthName = new Array("Jan", "Feb", "Mar",
"Apr", "May", "Jun", "Jul", "Aug", "Sep",
"Oct", "Nov", "Dec");

var thisMonth = dateObj.getMonth() ;
var thisYear = dateObj.getFullYear() ;

return monthName[thisMonth] + " " + dateObj.getDate() + ", " + thisYear;
}

function setCookie(cName, cValue, expDate, cPath, cDomain, cSecure) {
if (cName && cValue != "") {
var cString = cName + "=" + escape(cValue) ;
cString += (expDate ? ";expires=" + expDate.toGMTString(): "") ;
cString += (cPath ? ";path=" + cPath : "");
cString += (cDomain ? ";domain=" + cDomain : "") ;
cString += (cSecure ? ";secure" : "");
document.cookie = cString;
}
}


function getCookie(cName) {
if (document.cookie) {
var cookies = document.cookie.split("; ") ;
for (var i = 0; i < cookies.length; i++) {
if (cookies[i].split("=")[0] == cName) {
return unescape(cookies[i].split("=")[1]) ;
}
}

function DeleteCookie (name) { 
var exp = new Date(); 
exp.setTime (exp.getTime() - 1) ; 
// This cookie is history 
var cval = GetCookie (name); 
document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
<div id="pageFooter">
<span>Visit Number: pageCount</span>
<span>lastVisit</span>
<span>Last Update: pageUpdate</span>
</div>

}

/* Add new code below */

function writeCookie(cName, cValue, expDate) {
if (cName && cValue != "") {
var cString = cName + "=" + escape(cValue);
if (expDate) cString += ";expires=" + expDate.toGMTString() ;
if (cPath) cString += ";path=" + cPath;
if (cDomain) cString += ";domain=" + cDomain ;
if (cSecure) cString += ";secure";
document.cookie = cString;
}
}

function retrieveCookie(cName) {
if (document.cookie) {
var cookiesArray = document.cookie.split ("; ") ;
for (var i = 0; i < cookiesArray.length; i++) {
if (cookiesArray[i].split("=")[0] == cName) {
return unescape(cookiesArray[i].split("=")[1] ) ;
}
} 

function deleteCookie(cName) {
if (document.cookie} {
var cookiesArray = document.cookie.split ("; ") ;
for (var i = 0; i < cookiesArray.length; i++) {
if (cookiesArray[i].split("=")[0] = = cName) {
document.cookie = cName + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT" ;
}
}

function writeCookie(cName, fName, fValue, expDate, cPath, cDomain, cSecure) {
if (cName && Name && fValue != "") {
// Create the subKey
var subKey = fName + "=" + escape (fvalue) ;
}
}

function retrieveMCookie (cName, fName) {
if (document.cookie) {
// Retrieve the cookie value
// Retrieve the field value within the cookie
}
}

if (retrieveCookie ("lastVisit") = = null) lastVisit = "First time"
else lastVisit = retrieveCookie ("lastVisit") ;

var today = new Date () ;
var currentVisit = writeDateString (today) ;

expire = new Date () ;
expire.setMonth (expire.getMonth () + 6) ;
writeCookie ("lastVisit", currentVisit, expire) ;
}

