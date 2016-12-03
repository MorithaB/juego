'use strict'

let vacio = new Event('vacio')

let celdas = document.querySelectorAll('.celda')
let opcion = document.querySelector('#opcion')

let tablero = new Tablero(celdas)
let gestorFichas = new GestorFichas(celdas.length)

tablero.colorearCeldas()
gestorFichas.colorearFichas()

opcion.appendChild(gestorFichas.entregarFicha())

let drake = dragula({
    accepts: (el, target, source, sibling) => {
        if (source === target)
            return false

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

for (let celda of celdas)
    drake.containers.push(celda)

drake.containers.push(opcion)

drake.on('drop', (el, target, source, sibling) => {
    el.dataset.saved = true
    target.dataset.estado = 'lleno'

    if(gestorFichas.getNumFichas() > 0)
        opcion.appendChild(gestorFichas.entregarFicha())
    else
        window.dispatchEvent(vacio)

})

window.addEventListener('vacio', (e) => {
    alert('Buena Buena')
})
