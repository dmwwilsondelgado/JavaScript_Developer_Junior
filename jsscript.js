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



const setciones = document.querySelector(".card");//selecionamoss
console.log(setciones);
setciones.setAttribute("class","section-modificada")
const nuevas_sectionmotos = document.querySelector(".sestion-modificada");



// aca practicamos para cambiar las etiquetas con su respectivo texto con el querySelector()
const dd = document.querySelector("h1").textContent = "Hola mundo ";
console.log(dd);


const cuerpohtml = document.querySelector("body");
console.log(cuerpohtml);
cuerpohtml.setAttribute("class","bodyclass");
