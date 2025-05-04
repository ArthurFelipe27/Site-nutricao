const form = document.querySelector("form");
const botao = document.getElementById("btn-enviar");
const texto = document.getElementById("btn-texto");
const spinner = document.getElementById("spinner");

form.addEventListener("submit", () => {
  botao.disabled = true;
  texto.textContent = "Enviando...";
  spinner.style.display = "inline-block";
});




const formIMC = document.getElementById('formIMC');
const resultado = document.getElementById('resultadoIMC');

formIMC.addEventListener('submit', function (e) {
  e.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3 (mórbida)';
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong><br>${classificacao}`;
  } else {
    resultado.innerHTML = 'Por favor, insira valores válidos.';
  }
});