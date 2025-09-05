const btncad = document.getElementById("btncad");
const cadterro = document.getElementById("cadterro");

btncad.addEventListener("click", function() {
    const email = document.getElementById("emailInput").value;
    const senha = document.getElementById("senhaInput").value;
    const nome = document.getElementById("nomeInput").value;

    if (!email || !senha || !nome) {
        cadterro.textContent = 'Um dos campos está vazio. Por favor, preencha-lo.';
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

function aplicarTema(tema) {
    const body = document.body;
    const iconeTema = document.getElementById("icone-tema");
    const logo = document.getElementById("logo");


    if (tema === "dark") {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        if (iconeTema) {
            iconeTema.textContent = "wb_sunny"
        }
        if (logo) {
            logo.src = "img/LOGO-DARK.png"
            logo.style.width = "64px";
            logo.style.heith = "64px";
        }
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        if (iconeTema) {
            iconeTema.textContent = "bedtime";
        }
        if (logo) {
            logo.src = "img/LOGO.png"
            logo.style.width = "72px";
            logo.style.heith = "72px";
        }
    }
    localStorage.setItem("theme", tema);
}

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');