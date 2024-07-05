let numeroSecreto = gerarNumeroSecreto();
let numeroTentativas = 1;
console.log(numeroSecreto);
function exibirTextos(tag, texto){
    let element = document.querySelector(tag);
    element.innerHTML = texto;
}

exibirTextos('h1', 'Numero secreto');
exibirTextos('p', 'Escolha um número entre 1 a 10');

function verificarChute(){
    let chute = document.querySelector('input');
    if(numeroSecreto == chute.value){
        exibirTextos('h1', 'Acertou! \\o/\\o/');
        exibirTextos('p', `Em ${numeroTentativas} ${numeroTentativas > 1 ? 'tentativas' : 'tentativa'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroSecreto > chute.value){
            exibirTextos('h1', 'humm! :(');
            exibirTextos('p', `o número secreto é MAIOR que: ${chute.value}`);
        }
        else{
            exibirTextos('h1', 'humm! :(');
            exibirTextos('p', `o número secreto é MENOR que: ${chute.value}`);
        }
        numeroTentativas++;
        responsiveVoice.speak(`o número secreto é MAIOR que: ${chute.value}`, {rate:1.2});
    }
    
    let input = document.querySelector('input');
    input.value = '';
    input.onfocus = true;
}

function gerarNumeroSecreto(){    
    return parseInt(Math.random() * 10 + 1);
}

function resetarNumeroSecreto(){
    location.href = '/';
}