
///////////////////////////////////////////////////////// Connect to websocket server
 function Connect(token) {
		var appid;
        output = document.getElementById("debug");
		document.getElementById("debug").innerHTML = "Connecting ..."
		outputemail = document.getElementById("welcomeuser");
		
        if (token == '') {
            writeToScreen("Invalid API Token");
            return;
        } 
		if (token == "kS7A68xssbTVpkE") //Jenty Demo
			appid = 6490;
			
		else if (token =="COQz3VcylK89JoT") //Carline Live
			appid = 6841;
			
		else 
			{ 
			writeToScreen("API token is not authorized");
			return;
			}
			
		ws = new WebSocket('wss://ws.binaryws.com/websockets/v3?app_id='+appid); 
		
//////////////////////////////////////////////////////////Event listeners
		
		//listen to request to open websocket
		ws.onopen = function(evt) {
            onOpen(evt,token)
        };
        
		//listen to request to write to console
		ws.onmessage = function(evt) {
            onMessage(evt)
        };
}