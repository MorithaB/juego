let color = ['blue', 'red', 'purple', 'amber', 'green',
    'pink', 'teal', 'yellow']

let celdas = document.querySelectorAll('.celda')
let opcion = document.querySelector('#opcion')

let drake = dragula({
    accepts: (el, target, source, sibling) => {
        if (target.dataset.estado === 'lleno')
            return false;
        return true;
    },

    moves: (el, source, handle, sibling) => {
        if(el.dataset.saved)
            return false;
        return true;
    }
});

for (celda of celdas)
    drake.containers.push(celda)

drake.containers.push(opcion)

drake.on('drop', (el, target, source, sibling) => {
    el.dataset.saved = true;
    target.dataset.estado = 'lleno';
    console.log(el)
    console.log('dropped into')
    console.log(target)
})


let elemento = document.createElement('div')
elemento.classList.add('elemento')

opcion.appendChild(elemento)

let generarIndices = function(size) {
    let indice = []

    for(let i=0; i<size / 2; i++)
        indice.push(i, i)

    return indice;
}

let getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class Tablero {
    constructor(celdas) {
        this.celdas = celdas
    }

    llenarCeldas() {
        let indice = generarIndices(this.celdas.length)

        for (let celda of this.celdas) {
            let random = getRandomInt(0, indice.length)
            let i = indice[random]

            celda.classList.add(color[i])
            indice.splice(random, 1)
        }
    }
}

let t = new Tablero(celdas)
t.llenarCeldas()
