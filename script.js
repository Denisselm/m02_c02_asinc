//Comprobar si un número es par o inpar

const numero = parseInt(prompt("ingrese un número"))
if (numero % 2 == 0) {
    alert(numero + " es par")
} else {
    alert(numero + " es impar")
}


// Comprobar si alguien puede jubilarse en Chile considerando sexo y edad

const sexo = prompt("ingrese sexo femenino o masculino");
const edad = parseInt(prompt("ingrese su edad"))
if (sexo == "Masculino" && edad >= 65 || sexo == "Femenino" && edad >= 60) {
    alert("Felicidades ya puedes jubilarte!");
} else {
    alert("Aún no puedes jubilarte");
}