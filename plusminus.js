function plusMinus(arr){
  var positive = 0;
  var negative = 0;
  var zero = 0;
  var length = arr.length;
  for(var i = 0; i < length; i++){
    var value = arr[i]
    if( value > 0){
      positive += 1;
    }
    else if( value < 0){
        negative += 1;
      }
      else {
        zero += 1;
      }
    }
    var FractionofPositive = positive / length;
    var FractionofNegative = negative / length;
    var FractionofZero     = zero / length;
    console.log(FractionofPositive);
    console.log(FractionofNegative);
    console.log(FractionofZero);
}
plusMinus([1,2,3,-1,0,0]);
