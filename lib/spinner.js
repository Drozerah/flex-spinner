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