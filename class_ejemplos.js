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
//console.log(perro);

//agregamos mas animales
let gato  = new animal("gato","5","negro");
let pajaro = new animal("gato","1","verde con rojo ");
let vaca = new animal("vaca","9","blanco con negro");
//como hacemos para aceder  verlo en la web 
//document.writeln(pajaro.info);

// como hacemos para aceder y velo en cosoloa 
console.log(gato.info);

document.writeln(perro.info + "<br>");
document.writeln(gato.info + "<br>");
document.writeln(pajaro.info + "<br>");



class PersonasPersonal {
    constructor(nombre, edad, altura, tipoSangre, cargo) {
        this.name = nombre;
        this.edad = edad;
        this.altura = altura;
        this.sangre = tipoSangre;
        this.cargo = cargo;
        this.informacion = `Personal ${this.name}, sus años son: ${this.edad} y su altura es: ${this.altura}.
        Tipo de sangre: ${this.sangre}, Cargo propuesto: ${this.cargo}`;
    }
}
//let persona = new PersonasPersonal("Wilson", "18", "160", "A+", "Administrativo");
//console.log(persona.informacion);
let persona = new  PersonasPersonal("wilson","18","160","a+","administrativo");
let persona001 = new PersonasPersonal("wilson","18","168","A+","Personal Administrativo");
let persona002 = new PersonasPersonal("Lina",19,167,"O+","Axiliar Administrativo");
let persona003 = new PersonasPersonal("alejandro",20,168,"A+","Recursos Humanos");
let persona004 = new PersonasPersonal("angelica",21,150,"A+","Contabilidad");
//console.log(persona001.informacion);