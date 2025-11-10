console.log("Hola Window");
//window.open("https://www.youtube.com");// apbrimos ventanas 
//window.close(); // cerramos ventana
//window.stop()//detiene la ventana en proceso
//window.alert(); //para abrir ventana emergente
//window.print();//para imprimir ventana
//window.prompt();//nose devueleve un dato

let respuesta = window.confirm("Estas seguro de salir a sitio web");// nos devuelve true o false
console.log(respuesta);
//todo esto se puede escribir sin windows pero sale de window

//scren y scroll  mas metodos


const scren = window.screen();
console.log(scren);
document.writeln(scren);