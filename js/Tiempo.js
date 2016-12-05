'use strict'

class Tiempo {
	constructor() {
		this.segundos = 0
		this.minutos = 0
	}

	avanzar() {
		if (this.segundos == 59) {
			this.segundos = 0
			this.minutos++
		} else {
			this.segundos++;
		}
	}

	toString() {
		let min = this.minutos < 10 ? '0' + this.minutos : this.minutos
		let seg = this.segundos < 10 ? '0' + this.segundos : this.segundos

		return min + ':' + seg
 	}
}

class Timer {
	constructor(vistaTimer) {
		this.tiempo = new Tiempo()
		this.interval = undefined
		this.vista = vistaTimer
	}

	iniciar() {
		if(this.interval)
			clearInterval(this.interval)

		this.interval = setInterval(() => {
			this.tiempo.avanzar()
			this.vista.textContent = this.tiempo.toString()
		}, 1000)

	}

	terminar() {
		clearInterval(this.interval)
	}
}
