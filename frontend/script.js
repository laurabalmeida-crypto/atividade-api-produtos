// Etapa 1 — Definir a URL da API (porta 3000 no Codespaces)
const API_URL = 'http://localhost:3000/';

// Seção 10 — Criando a função carregarDados
async function carregarDados() {
  try {
    // Etapas 2, 3 e 4 — Fazer requisição, aguardar e converter para JSON
    const resposta = await fetch(API_URL);
    const produto = await resposta.json();

    // Etapa 5 — Acessar o elemento HTML com id "lista-produtos"
    const container = document.getElementById('lista-produtos');

    // Seção 11 — Criando o Card do Produto com Template String e innerHTML
    container.innerHTML = `
      <div class="card-produto">
        <h2>${produto.nome}</h2>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p class="preco"><strong>Preço:</strong> R$ ${produto.preco}</p>
      </div>
    `;
  } catch (erro) {
    console.error('Erro ao buscar os dados da API:', erro);
  }
}

// Seção 12 — Executando a função automaticamente ao carregar o script
carregarDados();