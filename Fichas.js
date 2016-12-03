'use strict'

class Ficha {
    constructor() {
        this.element = document.createElement('div')
        this.element.classList.add('elemento')
        this.element.dataset.saved = "false"
    }

    setColor(color) {
        this.element.classList.add(color)
    }

    getDOMElement() {
        return this.element
    }
}


class GestorFichas {
    constructor(num) {
        this.ficha = []

        for (let i=0; i<num; i++) {
            this.ficha[i] = new Ficha()
        }
    }

    getNumFichas() {
        return this.ficha.length
    }

    colorearFichas() {
        let indice = util.generarIndices(this.ficha.length)

        for (let ficha of this.ficha) {
            let random = util.randomInt(0, indice.length)
            let i = indice[random]

            ficha.setColor(util.color[i])
            indice.splice(random, 1)
        }
    }
    entregarFicha() {
        return this.ficha.pop().getDOMElement()
    }
}
