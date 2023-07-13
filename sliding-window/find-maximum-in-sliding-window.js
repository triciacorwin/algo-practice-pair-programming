function findMaxNums(arr, w) {
  const result = [];
  if (arr.length <= w) {
    result.push(Math.max(...arr));
    return result;
  }
  const window = arr.slice(0, w);
  const stop = arr.length - w;
  for (let i = 0; i <= stop; i++) {
       const max = Math.max(...window);
     result.push(max);
     window.shift();
     window.push(arr[w]);
     w++;
  }
  return result;
}
// console.log(findMaxNums([-4, 2, -5, 3, 6], 3));
// console.log(findMaxNums([-4, 2, 5, 3, 6], 6));