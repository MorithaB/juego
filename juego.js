
let celdas = document.querySelectorAll('.celda')
let opcion = document.querySelector('.opcion')

let drake = dragula();

for (celda of celdas)
    drake.containers.push(celda)

drake.containers.push(opcion)
