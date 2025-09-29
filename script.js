const menu = document.getElementById('menu-hamburguer');
menu.addEventListener('click', () => {
    menu.classList.toggle('open');
});

const menuOptions = document.getElementById('menu');
menuOptions.addEventListener('click', () => {
    menu.classList.toggle('open');
});

let animado = false;

window.addEventListener("scroll", () => {
  const secao = document.getElementById("total-vendas");
  const posicao = secao.getBoundingClientRect().top;
  const alturaTela = window.innerHeight;

  // só dispara uma vez
  if (!animado && posicao < alturaTela * 1) {
    animado = true;
    document.querySelectorAll("#total-vendas h2 b").forEach(b => {
      let alvo = +b.textContent; // lê o número do HTML
      let atual = 0;
      let incremento = Math.ceil(alvo / 100); // passo
      let timer = setInterval(() => {
        atual += incremento;
        if (atual >= alvo) {
          atual = alvo;
          clearInterval(timer);
        }
        b.textContent = atual;
      }, 30); // velocidade
    });
  }
});

// Seleciona todos os botões dentro da seção com id "products"
  const botoes = document.querySelectorAll('#products button');

  // Loop pelos botões encontrados
  botoes.forEach(botao => {
    // Cria um elemento <a>
    const link = document.createElement('a');
    link.href = 'erro.html';
    link.textContent = botao.textContent;
    link.style.textDecoration = 'none';
    link.style.color = 'inherit';

    // Substitui o conteúdo do botão pelo link
    botao.textContent = ''; // Limpa o botão
    botao.appendChild(link); // Coloca o <a> dentro do botão
  });