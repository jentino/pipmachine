//////////////////////////////////////////////////////////////////  COLOUR WIN AND LOSS
function checkWinOrLoss(amount){

	if (amount > 0) {
		countwins++;
		return amount.bold().fontcolor("Green");
	}
	else {
		
		countlosses++;

		return amount.bold().fontcolor("Red");
	}

}

//////////////////////////////////////////////////// GET ASSET
function getAsset(assetval) {
    var obj = document.getElementById("myAssets");
    document.getElementById("assetlist").innerHTML = obj.options[obj.selectedIndex].text.bold();
	assetvalue = assetval;
}

//////////////////////////////////////////////////// SHOW BALANCE

function showBalance(bal) {
	balanceamount = bal;
	document.getElementById("balanceupdate").innerHTML = balanceamount.bold().fontcolor("Green");
	showProfit(balanceamount);

}

//////////////////////////////////////////////////// SHOW PROFIT
function showProfit(b) {
	var NewBalance = b - OriginalBalance;
	var showprofit = NewBalance.toFixed(2);
	document.getElementById("profitupdate").innerHTML = showprofit;

}

//////////////////////////////////////////////////// PLAY TICKING SOUND 

function playSound() {
		var sound = document.getElementById("audio");
		sound.play();	  
}