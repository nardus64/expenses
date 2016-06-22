"use strict";
onLoad="myFunctionrandom(); return true;"

//new 1/11
   var button = document.getElementById('myButton');
   // Define a click listener on the button
   button.addEventListener('click', processClick);
  

   // 1/11
function myImg1() {
	img1.src(explode.jpg);
	
}

function myFunctionrandom() {
    var x = Math.floor((Math.random() * 10) + 1);
	    document.getElementById("demo").innerHTML = x;
	if (x > 6){x = 3}; if (x <  1){x=2};
    document.getElementById("demo3").innerHTML = x;
		return x;
}
function myFunctionrandom2() {
    var x = Math.floor((Math.random() * 10) + 1);
	    document.getElementById("demo").innerHTML = x;
	if (x > 6){x = 5}; if (x <  1){x=2};
    document.getElementById("demo").innerHTML = x;
		return x;
}
       var canvas, ctx;
	for (var i = 0, n = localStorage.length; i < n; i++){
        var key = localStorage.key(i);
        var value = localStorage[key];	
	}     
 function init() {		 
         // This function is called after the page is loaded
		 // populate textarea
		 poptextarea();
         // 1 - Get the first canvas
         canvas = document.getElementById('myCanvas1');
         // 2 - Get the context
         ctx=canvas.getContext("2d");

	    //	canvas.addEventListener('keydown', handleKeydown, false);
		//	canvas.addEventListener('mouseenter', setFocus, false);
		//canvas.addEventListener('mouseout', unsetFocus, false);	
		 canvas.addEventListener('mousedown', function (evt){
		 mousePos = getMousePos(canvas, evt);
		 setColor(mousePos.x, mousePos.y);}, false);
			 				
		var a = 1;
		var bad = 0;
		//requestAnimationFrame(drawSomething1a);
		//a = 1;
		//requestAnimationFrame(drawSomething2a);
		//	canvas.addEventListener('mousemove', function (evt) {
		//	mousePos = getMousePos(canvas, evt);}, false);
         // 3 - we can draw
		 
		 drawblock();
		// werk nie hier nie computerMove();
	 
       }
// add all the values in the localstorage to the textarea.
//d.toDateString();
	function poptextarea(){
		var total = 0.0;
	var myresult = " ";
	// get the day number
	var d = new Date();
	var c = d.getMonth();
	c++;
	var e = d.toDateString();
	var f = e.substr(11,4);
	var g = f + "-" + c;		

	for (var i = 0, n = localStorage.length; i < n; i++){
        var key = localStorage.key(i);
        var value = localStorage[key];
		myresult = value;
		var z = new Date();
		var y = myresult.substr(0,4);
		var m = myresult.substr(5,2);
		m--; // subtract 1 from the month as january value in date = 0 etc
		var dag = myresult.substr(8,2);
		z.setFullYear( y , m , dag);
			var tt = myresult.split(",",2);			
			var tt1 = tt.slice(1,4);	
			var ttt = parseInt(tt1); // parse tt1 into a integer ttt
		var rad1 = document.getElementById("lexdate");
		rad1.checked = true
		if (rad1.checked = true){
		//	if (z = d){
			document.getElementById("lextxtarea").value += myresult;
			total = total + ttt;
			}
		//}
		;	
		document.getElementById("total").value	= total;	 
	};
}		   
		
// SAVE the values to localstorage, call functions to pop the text area //and  clearing fields for next input	 
function saveme(){
	
	var Numf = document.getElementById("lexnum").value;
	var Datf = document.getElementById("lexdate").value;
	var textf = document.getElementById("lextext").value;
	if (Numf > " "){	
	//var myresult = Datf + ", " + Numf  + ", " + textf + ", ";
	var n = "expense" + (localStorage.length + 1);
	//var myresult = Datf + ", " + Numf  + ", " + textf;
	var myresult = Datf + ", " + Numf  + ", " + textf + ", ";
	localStorage.setItem(n,myresult);
	document.getElementById("lextxtarea").value += myresult;
	cleanfields();

	}
	else
	{
		alert ("Please enter values.");
	}
}
// delete all the local starage values
function clearlocal(){
      // erase all key values from store 
      localStorage.clear();
	  document.getElementById("lextxtarea").value = " ";
}
// NOT USED populate the array to input into the textarea "lextxtarea"
function popAray(){
	var i = 0;
	var listArry = [];
	alert("popAray " );
	
	for(i=0; i<10; i++){
	var localvalues = localStorage.getItem("expense");
	alert("localvalue1 " + localvalues);
	listArry.push(localvalues);}
	
	for(i=0; i<listArry.length; i++){
	alert("1 " + listArry[i]);}
//	
}
// clean the fields for re input
function cleanfields(){
		document.getElementById("lexnum").value = " ";
		document.getElementById("lextext").value = " ";

}	
 function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function newExpens(){
var lexexpense = " ";
alert("new  expense to be added here, chrome remember but the rest not");
}

   