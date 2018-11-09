function solve(a0, a1, a2, b0, b1, b2){
  var a = 0;
  var b = 0;
  if (a0 > b0) a++;
  if (a1 > b1) a++;
  if (a2 > b2) a++;
  if (b0 > a0) b++;
  if (b1 > a1) b++;
  if (b2 > a2) b++;
  console.log(a, b);
  return 0;
}
solve(1,2,3,4,5,6);