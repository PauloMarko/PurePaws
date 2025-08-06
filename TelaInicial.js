const btncatalogo = document.getElementById("butmeiocima");

btncatalogo.onclick = function() {
    window.location.assign("Catalogo.html");
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