'use strict'

class Tablero {
    constructor(celdas) {
        this.celdas = celdas

        for (let celda of this.celdas)
            celda.dataset.estado = 'vacio'
    }

    colorearCeldas() {
        let indice = util.generarIndices(this.celdas.length)
        let ant = -1

        for (let celda of this.celdas) {
            let random = util.randomInt(0, indice.length)

            while(ant === indice[random] && indice.length != 1)
                random = util.randomInt(0, indice.length)

            ant = indice[random]
            let i = indice[random]

            celda.classList.add(util.color[i])
            indice.splice(random, 1)
        }
    }
}
