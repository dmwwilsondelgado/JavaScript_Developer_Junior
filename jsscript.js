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
nuevoboton.textContent = "Cambiar a Negro";
//eveneto en el boton hola mundo usamos una funcion anonima
let fondonegro = false; 
nuevoboton.addEventListener("click",()=>{
    if (!fondonegro) {
        document.body.style.backgroundColor = "black";
        fondonegro = true;
        dato = confirm("estas seguro") && false;
    }else{
        document.body.style.backgroundColor = "white";
    }
})



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
// vamos a colocarle estilos al body con su nueva clase
cuerpohtml.style.backgroundColor = "green"
cuerpohtml.style.textAlign = "center";


// de nuevo a repasar asta memorizarlo
const nuevotitulo  = document.querySelectorAll("h2");
nuevotitulo.forEach((titulo)=>{
    titulo.textContent = "Hola a todos los h2"
});


//for (let i = 0; i < nuevotitulo.length; i++) {
//    nuevotitulo[i].textContent = `hola a todos ${i + 1}`;
//}

//nuevotitulo.textContent = "Hola a todos los h2"


const selecionar_input = document.querySelector("#newItem");
console.log(selecionar_input);

selecionar_input.setAttribute("type","range")
console.log(selecionar_input);

//////////////////////////////////////////////


const editar_p = document.querySelectorAll("p");
editar_p.textContent = " hola ala p"
console.log(editar_p[1]);
//for (let i = 0; i < editar_p.length; i++) {
//    editar_p[i].textContent = `Buenas noches a todas las ptm`;
//}

//editar_p.forEach((i)=>{
//    i.textContent = "hola a todas las p";
//////listo por hoy repasamos el query el se el get
//clases y construtores