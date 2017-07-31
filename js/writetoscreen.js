//////////////////////////////////////////////////// WRITE TO SCREEN FUNCTIONS ////////////////////////////////////////////////

	function writeToScreen(message) {
	        var pre = document.createElement("p");
	        pre.style.wordWrap = "break-word";
	        pre.innerHTML = message;
	        output.appendChild(pre);
			pre.scrollIntoView();
	}
		
	function writeToScreenEmail(email) {
			var newstr;
			if(email.match("cjpienaar@gmail.com"))
				newstr = "Carline Pienaar - Live";
			else if (email.match("jentino@gmail.com"))
				newstr = "Jenty Mepa - Demo";
				document.getElementById("welcomeuser").innerHTML = newstr.bold();
	}
		
	function writeTimeToScreen(thetime) {

			var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
			d.setUTCSeconds(thetime);
			document.getElementById("theseconds").innerHTML = d.getSeconds();
	}
		
	function returnTime(thetime) {

			var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
			d.setUTCSeconds(thetime);
			return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();					
	}


	function writeBalanceToDash(thebal) {
			
			document.getElementById("balanceupdate").innerHTML = thebal.bold();
			showProfit(thebal);		
	}
		
		
	function writeSellItToScreen(thebal) {
			showProfit(thebal);			
	}


	function writeWinLossToScreen() {
			var winlossresult = countwins - countlosses;
			document.getElementById("winlossDash").innerHTML = winlossresult;	
	}