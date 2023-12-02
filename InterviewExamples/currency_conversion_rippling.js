/**
 Write a function to convert between two currencies using limited conversion options.

 Calculate the total conversion rate by finding the product of all required intermediate conversions.

 If multiple rates are available for the target currency, any one can be returned.

 The program should be able to handle any possible combination of given currencies.

 For example, for the given example, we expect the following results:

 const conversions = [
 ["USD", "EUR", 0.95],
 ["USD", "INR", 80],
 ["BTC", "USD", 30000],
 ["EUR", "JPY", 137],
 ["CNY", "RUB", 9.11],
 ];

 USD → JPY: 130.15 (= 137 * 0.95)

 BTC → INR: 2,400,000 (= 30000 * 80)

 RUB → USD: null, or None, or 0, or similar
 */

const conversions = [
  ['USD', 'EUR', 0.95],
  ['USD', 'INR', 80],
  ['BTC', 'USD', 30000],
  ['EUR', 'JPY', 137],
  ['CNY', 'RUB', 9.11],
]

function currencyConversion(conversions, fromCurrency, toCurrency) {
  const currencyMap = new Map()

  for (let i = 0; i < conversions.length; i++) {
    const currencyPath = conversions[i]
    const key = currencyPath[0]
    const mappedPath = new Map()

    mappedPath.set(currencyPath[1], currencyPath[2])

    if (!currencyMap.has(key)) {
      currencyMap.set(key, mappedPath)
    } else {
      const newMappedPath = currencyMap
        .get(key)
        .set(currencyPath[1], currencyPath[2])
      currencyMap.set(key, newMappedPath)
    }
  }

  if (!currencyMap.has(fromCurrency)) {
    return null
  }

  return mappedCurrencyPath(currencyMap, fromCurrency, toCurrency)
}

function mappedCurrencyPath(currencyMap, fromCurrency, toCurrency) {
  let nextResult;
  if (currencyMap.has(fromCurrency)) {
    if (currencyMap.get(fromCurrency).has(toCurrency)) {
      return currencyMap.get(fromCurrency).get(toCurrency); // 0.95
    } else {
      for (let [key] of currencyMap.get(fromCurrency)) {
        nextResult = mappedCurrencyPath(currencyMap, key, toCurrency);
        if (nextResult == null) {
          continue;
        }
        return currencyMap.get(fromCurrency).get(key) * nextResult;
      }
    }
  }
  return null
}

console.log(currencyConversion(conversions, 'USD', 'EUR')) // 0.95
console.log(currencyConversion(conversions, 'USD', 'JPY')) // 130.15
console.log(currencyConversion(conversions, 'BTC', 'INR')) // 2400000
console.log(currencyConversion(conversions, 'RUB', 'USD')) // undefined
