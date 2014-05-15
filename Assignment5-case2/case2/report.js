/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 5
   Case Problem 2

   Author: Jiaju Shen
   Date: 3/1/2014    

   Filename: report.js



   Functions List:

   initPage()
      Initializes the contents of the Web page

   testLength()
      Tests a field for its length

   testPattern()
      Tests a field for its pattern

   validateForm
      Validates a Web form

   calcRow
      Calculates the costs within one row of the travel report

   calcTotal
      Calculates the total cost of the travel

   upDate
      Updates the total travel cost
*/
window.onload=initPage;
function initPage(){
	//alert("This is a test");
	var dataFields = new Array();
	var allInputs = document.getElementsByTagName("input");
	for(var i=0; i<allInputs.length; i++) {
		if(allInputs[i].className == "expenseEntry") dataFields.push(allInputs[i]);
    }
	//alert(allInputs.length);
	//alert(dataFields.length);
	//alert(document.forms[0].elements["sub"+1].value);
    for (var i=0; i<dataFields.length; i++)
    {	
        dataFields[i].onblur = update;
        document.forms[0].onsubmit = validateForm;
    }
}
function testLength(field) { 
   if (field.value.length == 0) { 
   field.style.backgroundColor="yellow"; 
   //alert("You should enter something");
   return false;
   }
   else {
   field.style.backgroundColor="white";  
   return true;
   }
}
function testPattern(field, regx) { 
   if (regx.test(field.value)== false) { 
   field.style.backgroundColor="yellow";  
   field.style.color="red";
   return false;
   }
   else {
   field.style.backgroundColor="white"; 
   field.style.color="black";
   return true;
   }
}

function validateForm() { 
   var isvalid = true;  
   if (testLength(document.forms[0].lname)==false) isvalid = false;
   else if (testLength(document.forms[0].fname)==false) isvalid = false;
   else if (testLength(document.forms[0].address)==false) isvalid = false;
   else if (testLength(document.forms[0].summary)==false) isvalid = false;
   if (testPattern(document.forms[0].account,/^ACT\d{6}$/)==false) isvalid = false;
   if (testPattern(document.forms[0].department,/^DEPT\d{3}$/)==false) isvalid = false;
   if (testPattern(document.forms[0].project,/^PROJ\d{5}$/)==false) isvalid = false;
   if (testPattern(document.forms[0].ssn,/^\d{9}|\d{3}-\d{2}-\d{4}$/)==false) isvalid = false;
   if (testDates()==false) isvalid = false;
   if (isvalid == false) {
	alert("Please fill out all required fields in the proper format."); 
   }
   return isvalid;
}
 
function testDates() { 
  var dateExists = true;  
  for (var i=1;i<=4;i++) {  
	if (document.forms[0].elements["sub"+i].value!=="0.00") {  
	  rowDateExists = testLength(document.forms[0].elements["date"+i]);  
	  if (rowDateExists==false) {
	  dateExists = false;
	 }
   }
   }
  return dateExists;
} 
 
function calcRow(row) {  
   //alert("test");
   var travel = parseFloat(document.forms[0].elements["travel"+row].value); 
   //alert(travel);
   var lodge = parseFloat(document.forms[0].elements["lodge"+row].value);  
   var meal = parseFloat(document.forms[0].elements["meal"+row].value);  
   return (travel + lodge + meal); 
}
 
function calcTotal() {  
   var totalexp = 0; 
   //alert(totalexp);
   for (var i=1;i<=4;i++) {
   totalexp += calcRow(i);
   }
   return totalexp; 
}
 
function update() {
   var numRegExp = /^\d*(\.\d{0,2})?$/;
   //alert(this.value);
   if (numRegExp.test(this.value)!==false){
   //alert(this.value);
   this.value = parseFloat(this.value).toFixed(2);
   //alert(this.value);
   for (var i=1;i<=4;i++) {
   document.forms[0].elements["sub"+i].value=calcRow(i).toFixed(2);
   document.forms[0].total.value=calcTotal().toFixed(2);
   }
   } 
   else {
   alert("Invalid currency value"); 
   (this.value = "0.00");
   this.focus();
   }
}

