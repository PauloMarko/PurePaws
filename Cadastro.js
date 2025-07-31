const btncad = document.getElementById("btncad");
const cadterro = document.getElementById("cadterro");

btncad.addEventListener("click", function() {
    const email = document.getElementById("emailInput").value;
    const senha = document.getElementById("senhaInput").value;
    const nome = document.getElementById("nomeInput").value;

    if (!email || !senha || !nome) {
        cadterro.textContent = 'Um dos campos está vazio. Preencha-lo.';
        cadterro.style.color = 'red';
        cadterro.style.fontFamily = 'Noto Sans';
        cadterro.style.textAlign = 'center';
        cadterro.style.paddingTop = '10px';
    } else if (!validateEmail(email)) {
        cadterro.textContent = 'E-mail inválido. Por favor, insira um e-mail válido';
        cadterro.style.color = 'red';
        cadterro.style.fontFamily = 'Noto Sans';
        cadterro.style.textAlign = 'center';
        cadterro.style.paddingTop = '10px';
    } else {
        window.location.href = 'TelaInicial.html';
    }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}