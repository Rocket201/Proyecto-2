function convertirCelsiusToFarenheit(){
 var celsius = parseFloat(document.getElementById("celsius").value);

 var fahrenheit = (celsius * 9/5) + 32;


document.getElementById("resultado").innerHTML = celsius + " grados Celsius equivalen a " + fahrenheit + " grados Fahrenheit.";
}

