document.getElementById('button-id').addEventListener('click', checkNumber)
const output = document.getElementById('output-log')

function checkNumber() {
  const userNum = document.getElementById('user-number').value
  console.log(userNum)
  if (userNum % 1 != 0 || isNaN(userNum)) {
      console.log(output)
      console.log("user number is not valid")
      output.innerHTML = "Please input a valid number"
  } else {
    if (userNum < 0) {
      console.log("User number is a negative")
      output.innerHTML = "Your number is a negative"
    }
    else if (userNum >= 0) {
      console.log("User number is positive")
      output.innerHTML = "Your number is positive"
    }
  }
}