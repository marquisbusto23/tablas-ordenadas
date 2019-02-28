var vm = new Vue({
    el: "#app",

    data: {
        nombres: ['Alberto',
            'Juana',
            'Eliana',
            'Pedro',
            'Ezequiel',
            'Ruben',
            'Mario',
            'Alejandro',
            'Priscila',
            'Eugenio',
            'Leandro',
            'Uriel',
            'Sebastian',
            'Bruno',



        ]

    },
    methods: {
        vocales: function (lista) {

            var vocales = [];
            for (var i = 0; i < lista.length; i++) {
                var nombre = lista[i];

                if (nombre.charAt(0).toUpperCase() === "A" ||
                    nombre.charAt(0).toUpperCase() === "E" ||
                    nombre.charAt(0).toUpperCase() === "I" ||
                    nombre.charAt(0).toUpperCase() === "O" ||
                    nombre.charAt(0).toUpperCase() === "U") {
                    vocales.push(nombre);

                }
            }

            return vocales;
        },


        consonantes: function (lista) {

            var consonantes = [];
            for (var i = 0; i < lista.length; i++) {
                var nombre = lista[i];

                if (nombre.charAt(0).toUpperCase() !== "A" &&
                    nombre.charAt(0).toUpperCase() !== "E" &&
                    nombre.charAt(0).toUpperCase() !== "I" &&
                    nombre.charAt(0).toUpperCase() !== "O" &&
                    nombre.charAt(0).toUpperCase() !== "U") {
                    consonantes.push(nombre);

                }
            }

            return consonantes;
        },

        OrdenarListas: function (lista) {            lista = this.OrdenarBurbuja(lista);            return lista;        },

        //Devuelve la coleccion ordenada
        OrdenarBurbuja: function (array, descendente) {

            if (!array.length || array.length < 2) return array

            var huboCambios;

            do {

                huboCambios = false;

                for (var i = 1; i < array.length; i++) {

                    var aux;

                    if (descendente) {

                        if (array[i] > array[i - 1]) {

                            aux = array[i - 1];
                            array[i - 1] = array[i];
                            array[i] = aux;

                            huboCambios = true;
                        }
                    }
                    else {
                        //Ascendente
                        if (array[i] < array[i - 1]) {

                            aux = array[i - 1];
                            array[i - 1] = array[i];
                            array[i] = aux;

                            huboCambios = true;
                        }
                    }
                }


            } while (huboCambios)

            return array;
        },

        Invertir: function invertir(nombre) {
            var x = nombre.length;
            var listaInvertida = "";

            while (x >= 0) {
                listaInvertida = listaInvertida + nombre.charAt(x);
                x--;
            }
            return listaInvertida;
        }

        




    }
});

    
    
