const fibonacci = (n) => {
  // your code here
  function fibo(number) {
    if (number === 0) return 0
    if (number === 1) return 1
    return fibo(number - 1) + fibo(number - 2)
  }
  const arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(fibo(i))
  }
  return arr
}
module.exports = fibonacci
