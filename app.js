// Import Class Spinner
const Spinner = require('./lib/spinner')
// Get Spinner element
let NewSpinner = document.querySelector('#spinner')
// Instanciate New Spinner Element
NewSpinner = new Spinner(NewSpinner)
// Get button element
const button = document.querySelector('button')  
button.addEventListener('click', (e) => {
    // Toogle Rotate
    NewSpinner.ToogleClassRotate()
    // Update button inner text
    if (NewSpinner.RotateState) {
        e.target.innerText = "Hide Spinner"
    } else {
        e.target.innerText = "Show Spinner"
    }
})
