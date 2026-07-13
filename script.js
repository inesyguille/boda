document.addEventListener("DOMContentLoaded", () => {
    const sobre = document.getElementById("abrir");
    const hero = document.querySelector(".hero");
    const contenido = document.getElementById("contenido");

    if (!sobre || !hero || !contenido) {
        console.error("Falta algún elemento (abrir, hero o contenido)");
        return;
    }

    sobre.addEventListener("click", () => {
        hero.style.display = "none";
        contenido.style.opacity = "1";
        contenido.style.visibility = "visible";
    });
});
