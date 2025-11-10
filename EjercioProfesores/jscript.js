estudiantes = [{
    nombre: "Wilson Delgado",
    email:"wilsondelgadomoreno@gmail.com",
    materia: "Programacion Web"
},{
    nombre: "lina Macias",
    email:"azumi@gmail.com",
    materia: "Machir learnig"
},{
    nombre: "Jorge impusim",
    email:"jorge@gmail.com",
    materia: "Programacion Web"
},{
    nombre: "Alejandro Magno tatusin",
    email:"AlejandroMagnoo@gmail.com",
    materia: "Programacion Web"
}

]

//creamos un for para aceder al obejto y recorrerlo
for(alumno in estudiantes){
    //console.log(estudiantes[alumno]);//acxa esamos recoriendo el objeto
    let datos = estudiantes[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlcode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida" >
                <option value="Semana 1">semanaPascuas</option>
                <option value="Semana 2">semanaCometas</option>
            </select>
        </div>`;
    document.querySelector(".grid-container").innerHTML += htmlcode;
}


const boton = document.querySelector(".boton-confirmar"); // selecionamos el boton
const eliminarboton = document.querySelector(".boton-confirmar");
//creamos un evento con una funcion anonima

boton.addEventListener("click",()=>{
    let confirmar = window.confirm("realmente quieres retornar las mesas");
    if (confirmar) {
        eliminarboton.remove();
        let elemento = document.querySelectorAll(".semana");
        let semanaelegida = document.querySelectorAll(".semana-elegida");
        for (let elemento in elementos) {
            semana = elementos[elemento];
            semana.innerHTML = semanaelegida[elemento].value;
        }
    }
})


//listo resolvemos el problema de cofla y ayudamos al profesor a recibir estos datos