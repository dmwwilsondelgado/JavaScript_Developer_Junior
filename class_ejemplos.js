class animal { //clase
    constructor(especie,edad,color){ // parametros que cosa tiene un animal
        //objeto = this. va tener una pripedad atributo 
        this.esp = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.esp},tengo${this.edad},años y soy ${this.color}`
    }
}
// variable  declarada a la clase y vamos a instanciarlo 
let perro = new animal( "frez buder", "5","blanco");

//document.write(perro);
console.log(perro);

//como hacemos para aceder 
document.writeln(perro.info);


