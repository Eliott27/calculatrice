function Nombre(number) {
    document.getElementById('display').value += number;
  }
  
  function Operateur(operator) {
    document.getElementById('display').value += operator;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      const expression = document.getElementById('display').value;
      const result = eval(expression);
      document.getElementById('display').value = result;
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  