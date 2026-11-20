// carrosel

const carrossel = document.querySelector('.carrossel');

const banners = carrossel.querySelectorAll(
    '.banner, .banner2, .banner3'
);

const setaEsquerda = carrossel.querySelector('.esquerda');
const setaDireita = carrossel.querySelector('.direita');

let bannerAtual = 0;

// Exibe somente o banner selecionado
function mostrarBanner(indice) {

    banners.forEach((banner, index) => {
        banner.style.display = index === indice ? 'flex' : 'none';
    });

}

// Avançar
function proximoBanner() {

    bannerAtual++;

    if (bannerAtual >= banners.length) {
        bannerAtual = 0;
    }

    mostrarBanner(bannerAtual);

}

// Voltar
function bannerAnterior() {

    bannerAtual--;

    if (bannerAtual < 0) {
        bannerAtual = banners.length - 1;
    }

    mostrarBanner(bannerAtual);

}

// Eventos das setas
setaDireita.addEventListener('click', proximoBanner);
setaEsquerda.addEventListener('click', bannerAnterior);

// Inicia o carrossel
mostrarBanner(bannerAtual);

function mostrarBanner(indice) {
    banners.forEach((banner, index) => {
        banner.style.display = index === indice ? 'flex' : 'none';
    });
}

// Troca automaticamente a cada 5 segundos
let intervalo = setInterval(proximoBanner, 5000);

// Reinicia o temporizador ao clicar nas setas
function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(proximoBanner, 5000);
}

setaDireita.addEventListener('click', reiniciarIntervalo);
setaEsquerda.addEventListener('click', reiniciarIntervalo);