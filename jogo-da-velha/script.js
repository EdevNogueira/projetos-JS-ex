//Script do jogo

const quadrante = document.querySelectorAll('.quadrante');
const restart = document.getElementById('restart');
let jogador1 = "X";
let qmaior = ['', '', '', '', '', '', '', '', ''];
let jogoInicio = true;

const condicaoVitoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 7]];

const clickNoQuadrante = function click() {
    const quadrante = click.target;
    const quadranteIndex = quadrante.getAttribute('data-index');
}