function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
var cash = 100;
var numApples=0;
var numOranges=0;
var numBanana=0;
var numPears=0;

var spentApples =0;
var spentOranges=0;
var spentBananas=0;
var spentPears=0;

var soldApples=0;
var soldOranges=0;
var soldBananas=0;
var soldPears=0;

var avgApples=0;

var apples = {name:"apples", price:randomNumber(1, 9.5)};
var oranges = {name:"oranges", price:randomNumber(1, 9.5)};
var bananas = {name:"banana", price:randomNumber(1, 9.5)};
var pears = {name:"pears", price:randomNumber(1, 9.5)};

var market = [apples, oranges, bananas, pears];


$(document).ready(function(){

// $("#employeeChart").prepend("<div class='employee "+reviewNum+"'><p>"
// 			+first+"</p><p>"+last+"</p><p>"+num+"</p><p>"+title+"</p><p>"+review+
// 			"</p><p>"+salary+" </p><button id='removeButton'>Fire this Person</button></div>");
// 	}
console.log(apples);

	
	 setInterval(function(){

	 	for(var i=0;i<market.length; i++){
	 		if(market[i].price==9.5){
	 			market[i].price -= 0.5;
	 		}else if(market[i].price==0.5){
	 			market[i].price+=0.5;
	 		}else{
	 			console.log(market[i].price)
	 			var random=randomNumber(1,2);
	 			if(random == 1){
	 				market[i].price-=0.5;
	 				
	 			}else {
	 				market[i].price +=0.5;
	 				
	 			}
	 		}

	 	};

	$("#applePrice").text(apples.price);
	$("#orangePrice").text(oranges.price);
	$("#bananaPrice").text(bananas.price);
	$("#pearPrice").text(pears.price);
	
		
	}, 1500);

	 $("#buyApple").on('click', function(){
	  	if(cash-apples.price>=0){
	  	cash-=apples.price;
	  	numApples++;
	  	spentApples += apples.price;
	  	console.log("button result "+cash+" "+numApples);
	  	$("#applesbought").text(numApples);
	  	$("#wallet").text(cash);
	  	$("#appleAvg").text((spentApples/numApples).toFixed(2));
	  }else{
	  	alert("No money");
	  }
	  });

	 $("#buyOrange").on('click', function(){
	 	if(cash-oranges.price>=0){
	  	cash-=oranges.price;
	  	numOranges++;
	  	spentOranges += oranges.price;
	  	$("#orangesbought").text(numOranges);
	  	$("#wallet").text(cash);
	  	$("#orangeAvg").text((spentOranges/numOranges).toFixed(2));
	  	 }else{
	  	alert("No money");
	  	}
	  });

	 $("#buyBanana").on('click', function(){
	 	if(cash-bananas.price>=0){
	  	cash-=bananas.price;
	  	numBanana++;
	  	spentBananas += bananas.price;
	  	$("#bananasbought").text(numBanana);
	  	$("#wallet").text(cash);
	  	$("#bananaAvg").text((spentBananas/numBanana).toFixed(2));
	  	 }else{
	  	alert("No money");
	  	}
	  });

	 $("#buyPear").on('click', function(){
	 		if(cash-pears.price>=0){
	  	cash-=pears.price;
	  	numPears++;
	  	spentPears += pears.price;
	  	$("#pearsbought").text(numPears);
	  	$("#wallet").text(cash);
	  	$("#pearAvg").text((spentPears/numPears).toFixed(2));
	  	 }else{
	  	alert("No money");
	  	}
	  });
	 $("#sellApple").on('click',function(){
	 	cash+=apples.price;
	 	numApples--;
	 	soldApples++;
	 	avgApples+=apples.price;
	 	$("#applesbought").text(numApples);
	 	$("#wallet").text(cash);
	 	$("#appleSales").text(avgApples/soldApples);

	 });


});

console.log(priceChange(6));
function priceChange (fruitPrice) {
	 		var random=randomNumber(1,2);
	 		if(random == 1){
	 			fruitPrice -=0.5;
	 			return fruitPrice;
	 		}else {
	 			fruitPrice +=0.5;
	 			return fruitPrice;
	 		}

}





