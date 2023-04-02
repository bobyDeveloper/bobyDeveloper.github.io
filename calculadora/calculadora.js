function calcular() {
    //Obtener los valores y la operación
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var operacion = document.getElementById("operacion").value;

    //Realizar la operación correspondiente
    var resultado;
    switch(operacion) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            resultado = valor1 / valor2;
            break;
        default:
            resultado = "Operación no válida";
    }

    //Mostrar el resultado
    document.getElementById("resultado").value = resultado;
}
