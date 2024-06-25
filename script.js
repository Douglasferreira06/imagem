// Certifique-se de que os seletores estão corretos
let img = document.querySelector("img"); // Supondo que haja um único <img> no HTML
let img2 = document.querySelector(".img2"); // Substitua ".img2" pelo seletor correto, se necessário

// Adiciona um event listener para img
img.addEventListener("click", function() {
    img.src = "./PROJETO/adulto.png";
});

// Adiciona um event listener para img2
img2.addEventListener("click", function() {
    img2.src = "./PROJETO/adulto.png";
});
