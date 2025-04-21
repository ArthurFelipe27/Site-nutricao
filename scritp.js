const form = document.querySelector("form");
  const botao = document.getElementById("btn-enviar");
  const texto = document.getElementById("btn-texto");
  const spinner = document.getElementById("spinner");

  form.addEventListener("submit", () => {
    botao.disabled = true;
    texto.textContent = "Enviando...";
    spinner.style.display = "inline-block";
  });