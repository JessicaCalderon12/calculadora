
    function calcularsuma() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 + num2;
      document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + resultado;
    }
    
    function calcularresta() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 - num2;
      document.getElementById("resultado").innerHTML = "El resultado de la resta es: " + resultado;
    }
    
    function calcularmultiplicacion() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 * num2;
      document.getElementById("resultado").innerHTML = "El resultado de la multiplicación es: " + resultado;
    }
    
    function calculardivision() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = num1 / num2;
      document.getElementById("resultado").innerHTML = "El resultado de la división es: " + resultado;
    }
    
    function calcularpi() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = Math.PI*num1+num2;
      document.getElementById("resultado").innerHTML = "El resultado de pi por el numero es: " + resultado;
    }
    
    function calcularpotencia() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = Math.pow(num1, num2);
      document.getElementById("resultado").innerHTML = "El resultado de la potencia es: " + resultado;
    }
    
    function calcularfraccion() {
      var num1 = parseFloat(document.getElementById("num1").value);
      var num2 = parseFloat(document.getElementById("num2").value);
      var resultado = Math.floor(num1/num2);
      document.getElementById("resultado").innerHTML = "el resultado de la fraccion es: " + resultado;
    }
 