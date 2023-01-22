//1480. Running Sum of 1d Array
// big O(n)
var nums = [1, 1, 1, 1, 1, 1];

function runningSum(numbers) {
  let result = [];
  let sum = 0;
  for (let index = 0; index < nums.length; index++) {
    sum += numbers[index];
    result.push(sum);
  }
  return result;
}
console.log(runningSum(nums));

//node 1480-Running-Sum-of-1d-array.js
//output: [ 1, 2, 3, 4, 5, 6 ]