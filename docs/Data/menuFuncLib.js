		
		
//Provides the main header displayed on all pages in the site.
//It is also accessed in a different way by the home page.

var siteTitle; //The grouped text info used by all content pages in the /ContentPages folder.
var titleDescrip; //Provides the overall descriptor for the siteTitle
var titleVersion; //Provides the most recent version information for the site.
var titleDisclaimer; //Provides the base disclaimer for the siteTitle.

titleDescrip = "<span id=titleTimestamp>Windows XP Visual Guidelines</span>";
titleVersion = "<span id=titleTimestamp>Preliminary: Last updated 08.01.01</span>";
titleDisclaimer = "<span id=titleTimestamp><BR>[ Not intended for use or reproduction until further notice ]</span>";

siteTitle = titleDescrip;

//Print window
function printContentWin() {
	window.print();
      }

            
function pageLoaded() {
	if (browser.isIE) {
		;
	} else {
		//alert("Analyzing data");
		//data = document.div[1].name;
		//alert(data);
		
	}
      }