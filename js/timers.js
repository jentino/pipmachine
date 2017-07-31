///////////////////////////////////////////////////////////////////////////////////////////////// TIMERS

//////////////////////////////////////////////////// SHOW TRADING COUNTDOWN TIMER IN DASHBOARD
i = 60;
function onTimer() {
  document.getElementById('mycounter').innerHTML = i;
  i--;
  if (i == 58) GetPortfolio();
  if (i < 5) playSound();
  
  if (i < 0) {

	i = 60;
  }
  else {
    setTimeout(onTimer, 1000);
  }
  if (i == 0) {
	setTimeout(function() {
	GetBalance();
    GetStatement();
	}, (3 * 1000));
	
	}
}


//////////////////////////////////////////////////////////////////  DISPLAY SERVER TIME SECONDS ON DASHBOARD
ii = 300000;
function onSecTimer() {
		  
		  ii--;
		  if (ws) {
		  ws.send(JSON.stringify({
                time: 1
            }));
          }
		  if (ii < 0) {
			ii = 300000;
		  }
		  else {
			setTimeout(onSecTimer, 1000);
		  }
		  
}


//////////////////////////////////////////////////////////////////  PING SERVER
k = 70000;
function onPinger() {
  k--;
	if (ws) {
		    
            ws.send(JSON.stringify({
                ping: 1
            }));
        }
    setTimeout(onPinger, 1000);
	
}  