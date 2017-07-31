//////////////////////////////////////////////////// PARSE JSON RESPONSES (WRITETOSCREEN)////////////////////////////////////////////////

onMessage = function(msg) {
        js = JSON.parse(msg.data);
		
		//Just for check for error
        if (js.error) { 
            writeToScreen("Error: " + js.error.message);
            return;
        }

        //Display response from authorization
		if (js.msg_type == 'authorize') {
            var get = parseGetVars();
            writeToScreen("Authorized OK".bold().fontcolor("Green") + "<br>  Email: " + (js.authorize.email).bold() + "  Account: " + (js.authorize.loginid).bold() + " Amount = " + "$ ".bold() + (js.authorize.balance).bold());
			writeToScreenEmail((js.authorize.email).bold());
			OriginalBalance = js.authorize.balance;
			onPinger();
	        onSecTimer();
	        subscribeTransactions();
			showBalance(js.authorize.balance);
			writeWinLossToScreen();
        }

		if (js.msg_type == 'time') {
            writeTimeToScreen(js.time);
			
        }
		
		if (js.msg_type == 'transaction') {
            writeBalanceToDash(js.transaction.balance);
			}
		
		if (js.msg_type == 'profit_table') {
            writeToScreen(js.profit_table.count);
        }
		
		
		if (js.msg_type == 'statement') {
		
			for(var i in js.statement.transactions)
				writeToScreen("= $ " + checkWinOrLoss(js.statement.transactions[i].amount) + " ID: ".bold() + js.statement.transactions[i].transaction_id + " Payout: ".bold()  +  js.statement.transactions[i].payout + " Action : ".bold()  +  js.statement.transactions[i].action_type + " Amount: ".bold()  + js.statement.transactions[i].amount + " Bal After: ".bold()  + js.statement.transactions[i].balance_after);
			alert("countlosses = "+ countlosses +":  countwins = " + countwins);
			writeWinLossToScreen();
        }
		
		
		if (js.msg_type == 'portfolio') {
            
			for(var i in js.portfolio.contracts)
				writeToScreen("> $ " +js.portfolio.contracts[i].buy_price + " ID: ".bold() + js.portfolio.contracts[i].transaction_id + " Symbol: ".bold()  +  js.portfolio.contracts[i].symbol + " Action : ".bold()  +  js.portfolio.contracts[i].contract_type + " Expiry time: ".bold()  + returnTime(js.portfolio.contracts[i].expiry_time));
        }
		
}