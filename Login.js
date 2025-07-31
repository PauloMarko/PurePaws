const btnlogin = document.getElementById("btnlogin");
const loginerro = document.getElementById("loginerro");

btnlogin.addEventListener("click", function() {
    const email = document.getElementById("emailInput").value;
    const senha = document.getElementById("senhaInput").value;

    if (!email || !senha) {
        loginerro.textContent = 'E-mail ou senha está vazio. Preencha-lo.';
        loginerro.style.color = 'red';
        loginerro.style.fontFamily = 'Noto Sans';
        loginerro.style.textAlign = 'center';
        loginerro.style.paddingTop = '10px';
    } else if (!validateEmail(email)) {
        loginerro.textContent = 'E-mail inválido. Por favor, insira um e-mail válido';
        loginerro.style.color = 'red';
        loginerro.style.fontFamily = 'Noto Sans';
        loginerro.style.textAlign = 'center';
        loginerro.style.paddingTop = '10px';
    } else {
        window.location.href = 'TelaInicial.html';
    }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}