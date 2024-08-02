//Script do jogo

const quadrantes = document.querySelectorAll('.quadrante');
const restart = document.getElementById('restart');
let jogadorAtual = "X";
let qmaior = ['', '', '', '', '', '', '', '', ''];
let jogoInicio = true;

const condicaoVitoria = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

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
    quadrante.textContent = jogadorAtual;
};

const trocarJogador = () => {
    jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
}

const checkResult = () => {
    let rodadaGanha = false;
    for (let i = 0; i < condicaoVitoria.length; i++) {
        const [a, b, c] = condicaoVitoria[i];
        if (qmaior[a] && qmaior[a] === qmaior[b] && qmaior[a] === qmaior[c]) {
            rodadaGanha = true;
            break;
        }
    }
    if (rodadaGanha){
        alert(`O Jogador ${jogadorAtual} venceu!`);
        jogoInicio = false;
    } else if (!qmaior.includes('')) {
        alert('Desenhe!');
        jogoInicio = false;
    } else {
        trocarJogador();
    }
}

const restartJogo = () => {
    jogadorAtual = 'X';
    qmaior = ['', '', '', '', '', '', '', '', ''];
    jogoInicio = true;
    quadrantes.forEach(quadrante => {
        quadrante.textContent = '';
    })
}

quadrantes.forEach(quadrante => {
    quadrante.addEventListener('click', clickNoQuadrante);
})

restart.addEventListener('click', restartJogo);