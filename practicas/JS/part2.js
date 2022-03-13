const cuadrado = function (x) {
    return x * x;
}

let numero = 4;
console.log(cuadrado(numero))

const saludar = function () {
    console.log("Holaaa!")
}

saludar()

const exponencial = function (base, exponente) {
    let resultado = 1
    for (let i = 0; i < exponente; i++) {
        resultado *= base
    }
    return resultado
}

console.log(exponencial(2, 10))

console.log(exponencial(4, 3))

const restar = (a, b) => {
    return a - b;
}

console.log(restar(26, 18))


// Exceptions
function preguntaDireccion(pregunta) {
    let result = prompt(pregunta);
    if(result.toLocaleLowerCase() == "izquierda") return "I"
    if(result.toLocaleLowerCase() == "derecha") return "D"
    throw new Error("Dirección inválidad: " + result)    
}

function mirar() {
    if(preguntaDireccion("A qué lado?") == "I") {
        return "una casa";
    } else {
        return "2 osos hambrientos.";
    }
}

try {
    console.log("Mirar a ", mirar())
} catch (error) {
    console.log("Hubo un error: " + error)
}