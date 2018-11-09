function birthdayCakeCandles(arr) {
    const max = Math.max(...arr)
    console.log(arr.filter(x => x === max).length);
}

birthdayCakeCandles([1,2,3,4,4,5]);