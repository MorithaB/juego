'use strict'

let vacio = new Event('vacio')

let vista = {
    celdas: document.querySelectorAll('.celda'),
    opcion:  document.querySelector('#opcion'),
    menu: document.querySelector('.menu'),
	tiempo: document.getElementById('time')
}

vista.limpiarTablero = function() {
    for(let celda of this.celdas) {
        if(celda.firstChild) {
            celda.removeChild(celda.firstChild)
            celda.classList.remove(celda.classList.item(1))
        }
    }
}

let juego = undefined

let drake = dragula({
    accepts: (el, target, source, sibling) => {
        if (target.dataset.estado === 'lleno')
            return false

        if(target.classList.contains(el.classList.item(1)))
            return true

        return false;
    },

    moves: (el, source, handle, sibling) => {
        if(el.dataset.saved === 'true')
            return false;
        return true;
    }
});

for (let celda of vista.celdas)
    drake.containers.push(celda)

drake.containers.push(vista.opcion)

drake.on('drop', (el, target, source, sibling) => {
    el.dataset.saved = true
    target.dataset.estado = 'lleno'

    if(juego.gestorFichas.getNumFichas() > 0)
        vista.opcion.appendChild(juego.gestorFichas.entregarFicha())
    else
        window.dispatchEvent(vacio)
})

vista.menu.addEventListener('click', (e) => {
    if(e.target.dataset.estado === 'stopped') {
        vista.limpiarTablero()
        juego = new Juego(vista)
        juego.iniciar()
    }
})

window.addEventListener('vacio', (e) => {
    alert('Buena Buena')
    juego.terminar()
})
