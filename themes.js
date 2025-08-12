// Define o tema inicial com base do sistema
function inicializarTema() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        aplicarTema(savedTheme);
    } else if (prefersDarkMode.matches) {
        aplicarTema("dark");
    } else {
        aplicarTema("light");
    }
}

// Chama a função de inicialização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", inicializarTema);

// Adiciona um listener para mudanças no tema do sistema (Opcional)
prefersDarkMode.addEventListener('change', (event) => {
    if (event.matches) {
        aplicarTema("dark");
    } else {
        aplicarTema("light");
    }
});


const iconeTemaElement = document.getElementById("icone-tema");
if (iconeTemaElement) {
    iconeTemaElement.addEventListener("click", () => {
        const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        aplicarTema(newTheme);
    });
}

const btnTema = document.getElementById("btn-tema");

let tema = localStorage.getItem('theme') ? localStorage.getItem('theme') : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

document.body.classList.add(tema + "-theme");

btnTema.addEventListener("click", function() {
    let tema = document.body.classList.contains("dark-theme") ? "dark" : "light";

    if (tema === "dark") {
        document.body.classList.replace("dark-theme", "light-theme");
        tema = "light";
                
    } else {
        document.body.classList.replace("light-theme", "dark-theme");
        tema = "dark";
    }
})

