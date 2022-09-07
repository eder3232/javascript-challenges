const trialDivision = (number) => {
  // your code here
  if (number < 2) return false
  if (!Number.isInteger(number)) return false
  for (let i = 2; i <= number ** 0.5; i++) {
    if (number % i === 0) return false
  }

  return true
}

module.exports = trialDivision
