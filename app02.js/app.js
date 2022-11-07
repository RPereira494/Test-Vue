const app = new Vue({
    el: "#app",
    data: {
        item: {
            nombre: "",
            completado: false
        },
        lista: [],
        indiceDinamico: undefined
    },
    methods: {
      
        agregarItem: function (){
            const item = {...this.item} // Construir un objeto de 0
             

            if(this.indiceDinamico != undefined){
                // this.lista[this.indiceDinamico] = item // Est. de JS
                this.$set(this.lista, this.indiceDinamico, item) // Est. de datos de Vue
            } else {
                this.lista.push(item) // Metodo .push(objeto) agrega el obheto para dentro de la lista
            }
           
            // Una vez que agrego a la lista
            // Reinicio los valores del objeto item
            this.item.nombre = ""
            this.item.completado = false
            this.indiceDinamico = undefined
        },
        eliminarItem: function (indice){
            // El splice remueve un elemento de la lista
            // splice(indice, cantidad)
            if(this.lista[indice].completado == false){ // Si no esta completado el item de la lista
                this.lista.splice(indice, 1)
            }
        },
        editarItem: function (indice){
            // Agarro manzana que esta en la posicion 0
            if(this.lista[indice].completado == false){
                this.item.nombre     = this.lista[indice].nombre
                this.item.completado = this.lista[indice].completado

                this.indiceDinamico  = indice
            }
            // this.item.nombre     -> Manzana
            // this.item.completado -> false
        }
    },
    mounted(){
       
    }
})