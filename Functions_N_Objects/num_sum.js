function sumNUM (){

	var sum1 = 0; 
	var sum2 = 0; 
	var sum3 = 0;
	var sum = 0;

for (i =3; i<1000; i=i+3){
    sum1 = sum1 + i;
    //console.log(sum1);
  }
  //console.log(sum1);
for (i =5; i<=1000; i=i+5){
    sum2 = sum2 + i;
  }
  //console.log(sum2);

for (i =15; i<1000; i=i+15){
    sum3 = sum3 + i;
  }
  //console.log(sum3);

  sum = sum1 + sum2;
  console.log(sum);
  return sum;
}
sumNUM();