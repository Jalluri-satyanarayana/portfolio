document.getElementById('convert').onclick = tempConvert;
document.getElementById('reset').onclick = ClearForm;

function tempConvert(){
      var fahrenheit = document.getElementById("Fahrenheit").value;
      var celsius = document.getElementById("Celsius").value;
      if(fahrenheit != '')
      {
        celsius = (parseFloat(fahrenheit) -32) / 1.8;
      }
      else
      {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
      }

      document.getElementById('Fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
      document.getElementById('Celsius').value = parseFloat(celsius).toFixed(1);
}            
function ClearForm(){
    document.getElementById('Fahrenheit').value='';
    document.getElementById('Celsius').value='';
}