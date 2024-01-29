// original
// const botao = document.querySelector(".btn-plataforma");
// const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//primeiro card
const botao1 = document.getElementById("btn_plataforma_selec1");
const elementoPlataforma1 = document.getElementById("plataforma_selec1");

// segundo card
const botao2 = document.getElementById("btn_plataforma_selec2");
const elementoPlataforma2 = document.getElementById("plataforma_selec2");

botao1.addEventListener("click", () => {
    elementoPlataforma1.classList.toggle("ativo");
});
botao2.addEventListener("click", () => {
    elementoPlataforma2.classList.toggle("ativo");
});