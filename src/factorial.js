const factorial = (number) => {
  // your code here
  if (number < 0) return 0
  if (number < 1) return 1
  return number * factorial(number - 1)
}

console.log(factorial(1))
module.exports = factorial
