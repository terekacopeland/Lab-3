//alert("JavaScript works!");

//Tereka Copeland
//SDI 1401
//Lab 3
//Following a Flowchart

//variables
var myRoommateName = "";

var hasFlat = true;

var numOfFlatTires = 1;

var changeTire = true;

var changeTireF = false;

var flTr = "flat tire";

var myRoommateName = prompt("What is your roommate's name?");

var coworkerAsks = "\"Is there something wrong?\"";

var roadside;

var phoneDying;

var phoneBattery;


//My Outputs
console.log("Leaving work at 1:30am with my coworker and I realize I have a " + flTr + ".");

console.log("My coworker asks me " + coworkerAsks + "");

console.log("I immediately realize it is " + hasFlat + " I have a " + flTr + ".");

console.log("I check how many flat tires are on the car.");

console.log("I have " + numOfFlatTires + " flat tire.");

console.log("I decide to call my roommate to help me change the tire.");

console.log("My coworker asks me 'what is my roommates name?'");

console.log("My roommate's name is " + myRoommateName + ".");

console.log("I need my roommate, " + myRoommateName + " to help me change my flat tire.");

changeTire = confirm("Do you want to help me? OK for yes, Cancel for no.");

console.log("I ask my coworker true or false if they think my roommate will help me change my tire,\nthey said " + changeTireF + ".\n");

console.log("My coworker also suggest that I can call roadside for help if I have enough charge on my phone.");

roadside = confirm("Do you think roadside will help?");

if (roadside === true) {
	
	console.log("If my phone battery is good we better call roadside if not we should call my roommate.");

	phoneBattery = prompt("What percent is the phone battery? \nEnter a number between 1 - 100 ?\n");
	
	phoneBattery = (phoneBattery>50) ?" Low Battery":"Fuly Charged";
	
	if (phoneBattery > 50) {
	
		console.log("Phone battery is good.");
		
	} else {
		
		console.log("My phone battery is good we should call roadside instead!");
};
	
	if (phoneDying === true) {
		
		console.log("My phone battery is dying we better call my roommate for quicker help!");
		
	} else {
	
		//console.log("My phone battery is good we should call roadside instead!");
	
};

} else {
	console.log("false");
	phoneDying = confirm("Is my phone dying?");
};

//console.log("I ask my roommate if they will help me change my tire,\nit is " + changeTireF + " my roommate is not on their way to help me.\n");

//changeTireF = confirm("Do you want to help me? OK for yes, Cancel for no.");



