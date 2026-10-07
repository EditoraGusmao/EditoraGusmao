const btnNFpagina = document.getElementById("btnNFpagina");
const btnLivros = document.getElementById("btnLivros");
const btnAutores = document.getElementById("btnAutores");
const btnLancamentos = document.getElementById("btnLancamentos");

btnNFpagina.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://editoragusmao.github.io/New-Fantasy/";
});

btnLivros.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://editoragusmao.github.io/Livros/";
});

btnAutores.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://editoragusmao.github.io/Autores/";
});

btnLancamentos.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "https://editoragusmao.github.io/Lancamentos/";
});