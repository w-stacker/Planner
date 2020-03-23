

var date;
var eventDescription;
var entryId;
var month;
var startDay;
var list;
var time;

const SHORT = 28;
const MEDIUM = 30;
const LONG = 31;

var FEB = SHORT;
var APR, JUN, SEP, NOV = MEDIUM;
var JAN, MAR, MAY, JUL, AUG, OCT, DEC = LONG;

function initCalendarGrid(month, startDay){

	this.month = month;
	this.startDay = startDay;

	for(i=1; i<startDay; i++){
		var newDiv = document.createElement("div");
		newDiv.setAttribute("class", "blanks");

		var newContent = document.createTextNode("-"); 
		newDiv.appendChild(newContent);

		var currentDiv = document.getElementById("populateGrid");
		document.body.insertBefore(newDiv, currentDiv);
	};

  	for(i=0; i<month; i++){
		var newDiv = document.createElement("div");
		newDiv.setAttribute("id", i+1);
	
		newDiv.addEventListener("click", getDescription, false);

		var newContent = document.createTextNode(i+1); 
		newDiv.appendChild(newContent);

		var currentDiv = document.getElementById("populateGrid");
		document.body.insertBefore(newDiv, currentDiv);
	};
}


function getDescription(){
	
	eventDescription = prompt("ENTER A DESCRIPTION AND TIME OF YOUR EVENT:");

	if(eventDescription != null){
		
		date = this.getAttribute("id");
		date = +date;
		console.log(date);
		console.log(eventDescription);
			(function (){
				document.getElementById(date).innerHTML = date + "&emsp;" + eventDescription;
				
				document.getElementById(date).className = "calendarCellSelected";
			})();
	};
}

function displayDescription(entryId){
	
}



