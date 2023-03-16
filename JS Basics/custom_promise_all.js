/**
 * Build a custom promise.all function
 */

function showText(text) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text)
    }, 1000)
  })
}

// Promise.all([showText('Hello'), showText('World')]).then((result) =>
//   console.log(result)
// )

function customPromiseAll(promises) {
  let result = []
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((resp) => {
        result[index] = resp
        if (index === promises.length - 1) {
          resolve(result)
        }
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

customPromiseAll([showText('Hello'), showText('World')]).then((result) =>
  console.log(result)
)
