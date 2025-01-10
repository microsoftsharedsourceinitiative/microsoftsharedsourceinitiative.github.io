//CODE LIBRARY

//DESCRIPTION
/*
Put yer JS code here for common reference.

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

/*
function: 
	checkURL()
Description:
	Takes the given string and compares it to the URL.  If
	the string is present in the URL, it returns 1, otherwise 0.
Params:
	> strKey:
		Format: string
		Required: Yes
		Descrip: The string to look for in the URL
	> strMode:
		Format: string
		Required: No
		Descrip: 
			Describes where to look for the URL
		Values:
			"local" <default>: Uses the local URL, window.location
			"top": USes the parent.window.location value

*/
function checkURL(strKey, strMode) {
	
	//declare local vars
	var strLoc;
		
	//resolve parameters
	if (!strMode) {
		strMode = "local";
	}
	
		//alert("checkURL(): strKey = " + strKey);
	//get the URL to review
	if (strMode == "local") {
		strLoc = window.location.toString();
		//alert("checkURL(): strLoc = " + strLoc);
	} else {
		strLoc = parent.window.location.toString();
		//alert("checkURL(): strLoc = " + strLoc);
	}
	
	//check the URL	
	if (strLoc.indexOf(strKey) > -1) {
		return 1;
	} else {
		return 0;
	}	
}


 /*
FUNCTION
Description:
	Calls the alert function.  Simple point where all commenting
	can be temporarily or permanently suspended/tracked.
Params:
	> strMsg:
		Format: string
		Required: No, but highly recommended.
		Descrip: The message contents of the string.
*/       
function doNote(strMsg) {
	alert(strMsg);
}


/*
CODE STRING
Description:
	Takes the given string and compares it to the URL.  If
	the string is present in the URL, it returns 1, otherwise 0.
Params:
	> strKey:
		Format: string
		Required: Yes
		Descrip: The string to look for in the URL
	> strMode:
		Format: string
		Required: No
		Descrip: 
			Describes where to look for the URL
		Values:
			"local" <default>: Uses the local URL, window.location
			"top": USes the parent.window.location value

*/
			var intKeyPointer; //Offset to the "MSIE" string in the appVersion
			var lstAppInfo;
			
			var browser = new Object();
			browser.version = navigator.appVersion;
			browser.isIE = 0;
			
			lstAppInfo = browser.version.split(";");
			lstVersionInfo = lstAppInfo[1].split(" ");
			lstVersionInfo = parseInt(lstVersionInfo[2]);
			
			if ((lstVersionInfo >=5) && (browser.version.indexOf("Windows")> -1)) {
				browser.isIE = 1;
				browser.version = lstVersionInfo;
			}
//scrollMonitor stuff




var intTimeStamp;
var objDate;

objDate = new Date();
intTimeStamp = 0;

function menuFollow() {
	window.setInterval(scrollMonitor,1000);
}

function moveDiv(locMax) {

	currLoc = document.all.navwrapper.style.top;
	
	for (i=currLoc;i<locMax;i++) {
		document.all.navwrapper.style.top = i;
	}
	
	document.all.navwrapper.style.top = locMax;
	
}
		
function scrollMonitor() {

	currTop = parseInt(document.all.navwrapper.currentStyle.top);
	topMod = parseInt(document.body.scrollTop);
	//alert("currTop = " + currTop + ", topMod = " + topMod);
	if (topMod > 205) {
		moveDiv(10 + topMod);
		//document.all.navwrapper.style.top = 10 + topMod;
	} else {
		moveDiv(205 + topMod);
		//document.all.navwrapper.style.top = 205 + topMod;
	}
}	 

function pgNav(pageLoc) {
	/*					  
	  if (browser.isIE) {
	  	strCaller = event.srcElement.id;											 
		keyObj = eval("document.all." + strCaller);									
		if (keyObj.style.display == "inline") {
			keyObj.style.display = "none";
	  } else {
	  		window.location = pageLoc;
	  }
	   */
}

function popWin(whichTarg, pgTitle, keyWidth, keyHeight) {
	window.open(whichTarg,pgTitle,"width=" + (keyWidth + 18) + ",height=" + (keyHeight + 18) + ",1");
}