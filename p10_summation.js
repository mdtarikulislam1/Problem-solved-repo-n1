var summation = function (num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i
  }
  return result
};
console.log(summation(5))

// Shortcat way

const summation2 = n => n * (n + 1) / 2;

console.log(summation2(5))

