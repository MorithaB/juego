'use strict'

let util = {
    color: ['blue', 'red', 'purple', 'amber', 'green',
            'pink', 'teal', 'yellow'],

    generarIndices: function(size) {
        let indice = []

        for(let i=0; i<size / 2; i++)
            indice.push(i, i)

        return indice;
    },

    randomInt: function(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
}
