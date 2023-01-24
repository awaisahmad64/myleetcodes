/*
@param{number} num
@return {boolean}
https://contactmentor.com/best-react-projects-for-beginners-easy/
*/
const isPowerOfTwo = (num) => {
  if (Math.log2(num) % 2 >= 0) {
    console.log(Math.log2(num));
    return true;
  } else {
    console.log(Math.log2(num));
    return false;
  }
};
console.log(isPowerOfTwo(0));
