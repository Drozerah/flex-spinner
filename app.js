(() => {

    class Spinner {
        constructor(spinner){
            this._spinner = spinner
            this._isRotate = false
        }

        talk(){
            console.log(this._spinner) // !DEBUG
        }
        /**
        * Add Class Rotate 
        */
        addClassRotate(){
            this._spinner.classList.add('rotate')

        }
        /**
        * Remove Class Rotate 
        */
        removeClassRotate(){
            this._spinner.classList.remove('rotate')
        }
        /**
        * Toogle Class Rotate 
        */
        toogleClassRotate(){
            if (!this._isRotate) {
                this.addClassRotate() 
            } else {
                this.removeClassRotate()
            }
            this._isRotate = !this._isRotate
        }
    }

    // Instanciate New Spinner Element
    const spinner = new Spinner(document.querySelector('#spinner'))
    const button = document.querySelector('button')
        
    button.addEventListener('click',(e) => {
        // Tooge Rotate
        spinner.toogleClassRotate()
    })

    
})()