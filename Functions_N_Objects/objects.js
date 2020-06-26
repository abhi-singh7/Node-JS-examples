console.log(__filename); /// file being executed
console.log(__dirname); // directory of file being executed


function printStuff(){
	console.log('This was from timeout');
}
setTimeout(printStuff, 2000);  // executes after 2 seconds timeout
function printStuff1(){
	console.log('This was from interval');
}
setInterval(printStuff1, 5000);  /// executes at an interval of 5 seconds