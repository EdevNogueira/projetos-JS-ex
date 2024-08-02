//Script do jogo

const quadrante = document.querySelectorAll('.quadrante');
const restart = document.getElementById('restart');
let jogadorAtual = "X";
let qmaior = ['', '', '', '', '', '', '', '', ''];
let jogoInicio = true;

const condicaoVitoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 7]];

const clickNoQuadrante = (click) => {
    const quadrante = click.target;
    const quadranteIndex = quadrante.getAttribute('data-index');

    if (qmaior[quadranteIndex] !== '' || !jogoInicio) {
        return;
    }

    atualizacaoQuadrante(quadrante, quadranteIndex);
    checkResult();
}

const atualizacaoQuadrante = (quadrante, index) => {
    qmaior[index] = jogadorAtual;
    quadrante.conteudoTexto = jogadorAtual;
};

const trocarJogador = () => {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
}