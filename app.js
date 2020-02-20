(() => {

    class Spinner {

        constructor(spinner){
            this._spinner = spinner
            this._isRotate = false
        }

        /**
         * Get Spinner state 
         */
        get RotateState () {
            return this._isRotate
        }

        /**
         * Add Class Rotate 
         */
        AddClassRotate(){
            this._spinner.classList.add('rotate')
        }

        /**
         * Remove Class Rotate 
         */
        RemoveClassRotate(){
            this._spinner.classList.remove('rotate')
        }

        /**
         * Toogle Class Rotate 
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

    // Instanciate New Spinner Element
    let NewSpinner = document.querySelector('#spinner')
    NewSpinner = new Spinner(NewSpinner)
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
    
})()