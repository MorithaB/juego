'use strict'

class Juego {
    constructor(vista) {
        this.tiempo = 0//Temp

        this.tablero = new Tablero(vista.celdas)
        this.gestorFichas = new GestorFichas(vista.celdas.length)
        this.timer = new Timer(vista.tiempo)

        vista.menu.dataset.estado = 'stopped'
    }

    iniciar() {
		this.timer.iniciar()

        this.tablero.colorearCeldas()
        this.gestorFichas.colorearFichas()

        vista.opcion.appendChild(this.gestorFichas.entregarFicha())
        vista.menu.dataset.estado = 'started'
    }

    terminar() {
		this.timer.terminar()
        vista.menu.dataset.estado = 'stopped'
    }
}
