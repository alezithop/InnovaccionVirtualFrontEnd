console.log("\n****************** Variables *********************\n")
var numero1 = 4

var numero2 = 2

var numlet ="4"

console.log(numero1)
console.log("\n****************** Cadenas *********************\n")
var frase1 = "Ejemplo comillas dobles"
var frase2 = 'Ejemplo "comillas" simples'
var frase3 = `Ejemplo comillas ${numero1} invertidas`

console.log(frase1)
console.log(frase2)
console.log(frase3)

console.log("\n****************** Cadenas: Concatenación *********************\n")
console.log(frase1 + frase2 + frase3)
console.log(frase1 + "\n" + frase2 + "\n" + frase3)



console.log("\n****************** Condicionales *********************\n")
console.log(numero1 > numero2)

console.log(numero1==numlet) // returns true
console.log(numero1===numlet) // returns false, because type doesnt match



console.log("\n****************** Operadores lógicos AND y OR *********************\n")
console.log(true&&false)
console.log(true||false)

console.log(true&&true)
console.log(false||false)


console.log("\n****************** Arreglos *********************\n")
let listaDeNumeros = [2, 3, 5, 7, 11, 234]

const gravedad = 9.81

console.log(listaDeNumeros[0])

let listaPalabras = ['Explorer', 'MissionComander', 'LaunchX', 'Innovaccion']
console.log(listaPalabras[3])
console.log(listaPalabras)

let palabra = 'Satelite'
console.log(palabra[2])
console.log(palabra.length)


console.log("\n****************** Objetos *********************\n")

let explorer = {
    nombre: "Alejandro",
    email: "Alejandro@yopmail.com",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}

console.log(explorer)

console.log(explorer.email)

console.log(explorer.proPer.profesional)



console.log("\n****************** If *********************\n")
if (palabra[2]=="S") {
    console.log("S")
} else if(palabra[2] == "E") {
    console.log("E")
} else {
    console.log("Tu letra es T")
}

console.log("\n****************** For *********************\n")

for (let index = 0; index < listaDeNumeros.length; index++) {
    const element = listaDeNumeros[index];
    console.log(element)
}


console.log("\n****************** Switch *********************\n")
/* switch (prompt("¿Qué día es hoy?")) {
    case "lunes":
        console.log("Bonito inicio de semana")
        break;

    case "viernes":
        console.log("Ya es fin de semana")
        break;

    case "sabado":
        console.log("Relaaaax! B)")
        break;
        
    case "domingo":
        console.log("Disfruta tu domingo")
        break;
        
    default:
        console.log("Si se puede")
        break;
} */




