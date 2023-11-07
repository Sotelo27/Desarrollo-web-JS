/*
Ejercicio 1)
a)La funcion callbak es una funcion que se pasa a otra funcion, en este caso como el tercer parametro, que invoca dentro de la funcion externa para algun tipo de accion.
Suele ser obligatorio en casos donde se manejan operaciones asincronicas, base de datos o operaciones de lectura de archivos etc.
*/

//Ejercicio 2)

function calcular(operador) {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    let resultado;

    switch (operador) {
        case '+':
            resultado = operando1 + operando2;
            break;
        case '-':
            resultado = operando1 - operando2;
            break;
        case '*':
            resultado = operando1 * operando2;
            break;
        case '/':
            if (operando2 !== 0) {
                resultado = operando1 / operando2;
            } else {
                resultado = "Error: División por cero";
            }
            break;
        default:
            resultado = "Operador inválido";
    }

    document.getElementById('resultado').value = resultado;
}