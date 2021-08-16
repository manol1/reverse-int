module.exports = function reverse (n) {
  let number = String(Math.abs(n));
  let result = '';
  let i = 0;
  while (i < number.length) {
    result = result + number[number.length - 1 - i];
    i+=1;
  }
  return Number(result);
}
