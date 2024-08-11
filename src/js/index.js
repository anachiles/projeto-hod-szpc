//- passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// - passo 2 - dar um jeito de identificar o clique do usuário do botao
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // - passo 3 -desmarcar o botao marcado selecionado anterior
    desativarBotaoSelecionado();

    // - passo 4 - marcar o botao clicando como se estivesse selecionado
    marcarBotaoSelecionado(botao);

    // - passo 5 - esconder a imagem anteriormente selecionada
    esconderImagemAtiva();

    // - passo 6 - fazer aparecer a imagem correspondente ao botao clicado
    mostrarImagemDeFundo(indice);

    // - passo 7 - esconder a informacao do dragao anteriormente selecionado
    esconderInformacoesAtivas();

    // passo 8 - mostrar a informacao do dragao referente ao botao clicado
    mostrarInformacoes(indice);
  });
});

function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
