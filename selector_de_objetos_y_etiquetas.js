//definir obtener y eliminar valores atributos


const rangoEtario = document.querySelector(".rangoEdad");
console.log(rangoEtario);
rangoEtario.setAttribute("type","wilson");


console.log(rangoEtario.getAttribute("type"));// obtenemos el resultado del nodo
//console.log(rangoEtario.setAttribute("type"));
//console.log(rangoEtario.removeAttribute("type")); // para remover el atrubito



/// Clase practica de lo visto ayer 

class carros {
    constructor(color,tipo,marca,velocidadFinal){
        this.color = color;
        this.tipo = tipo;
        this.marca = marca;
        this.velocidad = velocidadFinal;
        this.info = `El auto es de color ${this.color}. de la marca ${this.marca}`;
    }
}

let carro = new carros("rojo","pequeño","mazda","210km");
console.log(carro.info);
// el contrutor en javascript siempre se lalmara construtor si no no lo detecta 
