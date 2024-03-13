// Task 1 - Double Function
// will take a number and return the double of it.
// console.log
// if i pass 5, it will return 10

function makeDouble(num) {
  console.log(`The double of the number: ${num} is: ${num * 2}`)
}
makeDouble(5)

// Task 2 - Convert the Temperature to C
// Create a function called convertToCelsius that takes a parameter fahrenheit.
// 30 in celcius and you console.log( in farenheit)

function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9
  console.log(fahrenheit + ' in F is ' + celsius + ' C')
}

// convertToCelsius(32)

// // Task 3 - Convert the Temperature to F
// function convertToFarenheit(celsius) {
//   let farenheit = (celsius * 9) / 5 + 32
//   console.log(celsius + ' in celsius is ' + farenheit + ' F')
// // }

// convertToFarenheit(40)

// const convertToKm = (mile) => mile * 0.67
// console.log('MILE TO KM IS: ' + convertToKm(10))


// convertToFarenheit(40)

// const convertToKm = (mile) => mile * 0.67
// console.log('MILE TO KM IS: ' + convertToKm(10))


convertToFarenheit(40)

const convertToKm = (mile) => mile * 0.67
console.log('MILE TO KM IS: ' + convertToKm(10))
