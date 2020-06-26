var fs = require('fs');

fs.readFile('input.txt', function(err, data){ // this is a callback function getting used in asynchronus read
  if (err){
    console.log(err);
  }else{
    console.log('Async data is '+ data.toString());
  }
});

var data = fs.readFileSync('input.txt');  // block the execution till the exuction finishes in synchonous
console.log('Sync data is '+ data.toString());
console.log('This is the end');