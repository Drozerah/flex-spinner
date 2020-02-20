(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"./lib/spinner":2}],2:[function(require,module,exports){
/**
 * Creates a new Overlay Spinner utility.
 *
 * @class
 * @fileOverview Various tool functions.
 * @author Drozerah
 * @version 1.0.0
 * @description - This class instanciate a loading spinner element
 */
class Spinner {
    
  /**
   * @constructs Spinner
   * @param  {Object} spinner - The DOM element to instanciate
   * @property {Array<boolean>} _isRotate - The Array of validator operations results
   * @description - This class instanciate a loading spinner element
   */
  constructor(spinner){
      this._spinner = spinner
      this._isRotate = false
  }

  /**
   * Get the _isRotate state of the instance
   * @returns {Boolean} - The Spinner Boolean state
   * @description - This method is used to get the spinner state as Boolean value
   */
  get RotateState () {
      return this._isRotate
  }

  /**
   * Add CSS class of 'rotate'
   * @returns {void}
   * @description - This method is used to add the CSS class of 'rotate' to the instance
   */
  AddClassRotate(){
      this._spinner.classList.add('rotate')
  }

  /**
   * Remove CSS class of 'rotate'
   * @returns {void}
   * @description - This method is used to remove the CSS class of 'rotate' to the instance
   */
  RemoveClassRotate(){
      this._spinner.classList.remove('rotate')
  }

  /**
   * Toogle CSS class of 'rotate'
   * @returns {void}
   * @description - This method is used to toogle the CSS class of 'rotate' of the instance
   */
  ToogleClassRotate(){
      if (!this._isRotate) {
          this.AddClassRotate() 
      } else {
          this.RemoveClassRotate()
      }
      this._isRotate = !this._isRotate
  }
}

module.exports = Spinner
},{}]},{},[1]);
