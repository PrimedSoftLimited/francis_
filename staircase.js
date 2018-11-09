function stairCase(num){
  // var hash;
  // var stair;
  // var space;
for(var i = 0; i < num; i++){
    space = num - i;
    hash  = i + 1;
    stair = ' '.repeat(space) + '#'.repeat(hash);//+ ''.repeat(space);
    console.log(stair);
  }
}
stairCase(7);