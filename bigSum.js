function bigSum(arr) {
  var arr;
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum = sum + arr[i]; 
  }
  console.log(arr.length);
  console.log(sum);
}
bigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000001,1000000101]);
