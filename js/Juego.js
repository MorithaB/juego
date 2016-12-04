'use strict'

class Juego {
    constructor(vista) {
        this.tiempo = 0//Temp

        this.tablero = new Tablero(vista.celdas)
        this.gestorFichas = new GestorFichas(vista.celdas.length)
        this.timer = undefined

        vista.menu.dataset.estado = 'stopped'
    }

    iniciar() {
        if(this.timer)
            clearInterval(this.timer)

        this.timer = setInterval(() => {this.print()}, 1000)

        this.tablero.colorearCeldas()
        this.gestorFichas.colorearFichas()

        vista.opcion.appendChild(this.gestorFichas.entregarFicha())
        vista.menu.dataset.estado = 'started'
    }

    print() {
        console.log(this.tiempo)
        this.tiempo++
    }

    terminar() {
        clearInterval(this.timer)
        vista.menu.dataset.estado = 'stopped'
    }
}
