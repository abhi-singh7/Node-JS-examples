function timer3(){
  console.log('TCS');
}

//setInterval(timer3,2000);
var tt = setInterval(timer3,2000);
setTimeout(function(){
	clearInterval(tt);
}, 10000);