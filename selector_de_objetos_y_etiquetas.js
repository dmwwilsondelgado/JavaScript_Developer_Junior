//definir obtener y eliminar valores atributos


const rangoEtario = document.querySelector(".rangoEdad");
console.log(rangoEtario);
rangoEtario.setAttribute("type","wilson");


console.log(rangoEtario.getAttribute("type"));// obtenemos el resultado del nodo
//console.log(rangoEtario.setAttribute("type"));
console.log(rangoEtario.removeAttribute("type")); // para remover el atrubito