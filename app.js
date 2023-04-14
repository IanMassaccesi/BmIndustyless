

const boton = document.querySelector("#boton");
const boton2 = document.querySelector("#boton2");
const boton3 = document.querySelector("#boton3");
const boton4 = document.querySelector("#boton4");
const boton5 = document.querySelector("#boton5");
const boton6 = document.querySelector("#boton6");
const grande = document.querySelector("#grande");
const funcionesCambioClases = [
    cambiarClasesG2,
    cambiarClasesG3,
    cambiarClasesG4,
    cambiarClasesG5,
    cambiarClasesG6,
];
const hamburgesa = document.querySelector("#hamburguesa");
const caja = document.querySelector(".caja");
const texto = document.createElement("a")


function cambiarClasesG1() {
    if (!grande.classList.contains("g1")) {
        grande.classList.remove("g1", "g2","g3","g5","g6");
        grande.classList.add("g1");
        boton.classList.add("activo");
        boton2.classList.remove("activo");
        boton3.classList.remove("activo");
        boton4.classList.remove("activo");
        boton5.classList.remove("activo");
        boton6.classList.remove("activo");
    }
}

function cambiarClasesG2() {
    if (!grande.classList.contains("g2")) {
        grande.classList.remove("g1", "g2","g3","g4","g5","g6");
        grande.classList.add("g2");
        boton.classList.remove("activo");
        boton2.classList.add("activo");
        boton3.classList.remove("activo");
        boton4.classList.remove("activo");
        boton5.classList.remove("activo");
        boton6.classList.remove("activo");
    }
}

function cambiarClasesG3() {
    if (!grande.classList.contains("g3")) {
        grande.classList.remove("g1", "g2","g3","g4","g5","g6");
        grande.classList.add("g3");
        boton.classList.remove("activo");
        boton2.classList.remove("activo");
        boton3.classList.add("activo");
        boton4.classList.remove("activo");
        boton5.classList.remove("activo");
        boton6.classList.remove("activo");
    }
}
function cambiarClasesG4() {
    if (!grande.classList.contains("g4")) {
        grande.classList.remove("g1", "g2","g3","g4","g5","g6");
        grande.classList.add("g4");
        boton.classList.remove("activo");
        boton2.classList.remove("activo");
        boton3.classList.remove("activo");
        boton4.classList.add("activo");
        boton5.classList.remove("activo");
        boton6.classList.remove("activo");
    }
}
function cambiarClasesG5() {
    if (!grande.classList.contains("g1")) {
        grande.classList.remove("g1", "g2","g3","g4","g5","g6");
        grande.classList.add("g5");
        boton.classList.remove("activo");
        boton2.classList.remove("activo");
        boton3.classList.remove("activo");
        boton4.classList.remove("activo");
        boton5.classList.add("activo");
        boton6.classList.remove("activo");
    }
}
function cambiarClasesG6() {
    if (!grande.classList.contains("g3")) {
        grande.classList.remove("g1", "g2","g3","g4","g5","g6");
        grande.classList.add("g6");
        boton.classList.remove("activo");
        boton2.classList.remove("activo");
        boton3.classList.remove("activo");
        boton4.classList.remove("activo");
        boton5.classList.remove("activo");
        boton6.classList.add("activo");
    }
}


funcionesCambioClases.forEach((funcion, index) => {
        setTimeout(funcion, (index + 1) * 3000);
});

hamburgesa.addEventListener("click", e =>{
    caja.classList.toggle("visible")
})


boton.addEventListener("click", cambiarClasesG1);
boton2.addEventListener("click", cambiarClasesG2);
boton3.addEventListener("click", cambiarClasesG3);
boton4.addEventListener("click", cambiarClasesG4);
boton5.addEventListener("click", cambiarClasesG5);
boton6.addEventListener("click", cambiarClasesG6);

