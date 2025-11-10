// que son los nodos todo lo que se conforma como etiquetas son nodos es la estrcutura del arbol 
//hay muchos tipos de nodos 
//document:es todo lo que abaraca el nodo
//Element : nodo que se definen alas etiquetas html 
//text: lso atributos son hijos en modo texto
//informacion asociada a otro elemento
//Metodo de selecion de elementos
//document.getElementById(); // por id se seleciona
//document.getElementByTagName();
//let parrafo = "Segume@soyWilson";
//document.writeln(parrafo);

//para no hacer lo de arriba seleceionamos el getByid

parrafo = document.getElementById("parrafo");//selecionamos la etiqueta p
document.writeln(parrafo);//imprimimos

//tambien podemos selecionarlo por el Tag name
parafo = document.getElementsByTagName("p");
console.log(parafo[0]);

BotonIniciar = document.getElementById("form1");
console.log(BotonIniciar[0]);//aprendimos a selecionar un item y objeto cosa que no 
//entendi en el sena 


// selectores estos sirven para selecionar las clases

selecionarParrafo = document.querySelector(".parrafo")
console.log(selecionarParrafo); // esta es una forma de selecionar
//los objetos para amas adelnate modificarlos

selecionaElementoPorId = document.querySelector("#form1");
console.log(selecionaElementoPorId);
//de esta manera el numeral lo podemos selecionar con un # 
//document.querySelectorAll seleciona todos los elementos especificados sean clases 
//o id 


