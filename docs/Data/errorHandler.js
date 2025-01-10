
//ERROR HANDLING CODE

//DESCRIPTION
/*
Put any asserts or other error handling here.

Var Descriptions
-----------------
> debugMode:
	Format: integer
	Values:
		0: Turn off debugging
		1: Debug for local server only
		2: Debug on regardless of location.

> strLocalServer
	Format: string
	Values: 
		Put the local server string here.
		
*/

//declare variables
//-----------------
var intDebugMode;
var strLocalServer;

//init variables
//--------------
strLocalServer = "glennb-ri2";
intDebugMode = 1;

//Assign event handlers
//---------------------
window.onerror=handleError;
//alert("errorHandler working");



function handleError(message, url, line) {
	//alert("error handler called");
	//declare local vars
	var strAlert;
	var intShowDebug;
	var strLoc;
	
	//init vars
	intShowAlert = 0;
	strAlert = "";
	
	//decide how to handle the error
	if (intDebugMode == 1) {
		strLoc = parent.window.location.toString();
		if (strLoc.indexOf(strKey) > -1) {
			intShowAlert = 1;
		}
	} else if (intDebugMode == 2) {
		intShowAlert = 1;
	}
	
	if (intShowAlert) {
		strAlert = "An error occurred:\n";
		strAlert += "Message: " + message + "\n";
		strAlert += "URL: " + url + "\n";
		strAlert += "Line: " + line + "\n";
		alert(strAlert);
	}
	
	return 1;
		 
}