class motos{
    constructor(marca,referencia,color){
        this.marca = marca;
        this.referencia = referencia;
        this.color = color;
        this.info = `la moto es ${this.referencia} 
        de la marca ${this.marca} 
        y su color original es ${this.color}`
    }
}
let moto001 =  new motos("yamaha","mt15","blanco narajana");
console.log(moto001.info);

 ////////////////////////////////////////////////////////////

//
const boton = document.querySelector("#changeSrc");
console.log(boton);
boton.setAttribute("id","BotonModificar");
const nuevoboton = document.querySelector("#BotonModificar");
nuevoboton.textContent = "Hola mundo";



const setciones = document.querySelectorAll(".card");
console.log(setciones);
