function sumArray(arr){
  var total = 0;
  for(var i = 0; i < arr.length; i++){
     total = total  + arr[i];
  }
    console.log(total);
}
sumArray([1,2,3,4]);