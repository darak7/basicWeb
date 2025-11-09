
function numeroPar(numero) {
    return numero % 2 === 0;
}

let numero = prompt("Ingresa un número:");

if (numero !== null && !isNaN(numero)) {
    let mensaje = numeroPar(Number(numero)) ? "El número es par" : "El número es impar";
    alert(mensaje);
} else {
    alert("Ingresa un número válido");
}
