function minMaxSum(arr){
  var sum1 = 0;
  var sum2 = 0;
  var length = arr.length;
for(var i = 0; i < arr.length; i++){
  sum1 += arr[i];
  sum2 += arr[i];
}
  sum1 -= arr[length-1];
  sum2 -= arr[0];
  console.log(sum1,sum2);
}
minMaxSum([1,2,3,4,5]);