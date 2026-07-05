// ==========================
// ANIMACIÓN DE ENTRADA
// ==========================

const buttons = document.querySelectorAll(".link-btn");

buttons.forEach((button, index) => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px)";

    setTimeout(() => {
        button.style.transition = "all .5s ease";
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
    }, 250 + (index * 150));
});

// ==========================
// EFECTO AL HACER CLICK
// ==========================

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(.97)";

        setTimeout(() => {
            button.style.transform = "";
        }, 150);

    });

});
