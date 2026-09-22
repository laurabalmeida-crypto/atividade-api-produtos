// Etapa 10 e 12: Função para carregar os dados da API
async function carregarDados() {
  try {
    // Etapa 1: Endereço do backend na porta 3000
    const url = 'https://animated-space-xylophone-p7pvrxx9r57r27pv5-3000.app.github.dev/';

    // Etapa 2 e 3: Requisição GET com fetch/await
    const resposta = await fetch(url);

    // Etapa 4: Converte a resposta em JSON
    const produto = await resposta.json();

    // Etapa 5: Acessa a div pelo ID 'lista-produtos'
    const container = document.getElementById('lista-produtos');

    // Etapa 11: Injeta o HTML do Card com os dados dinâmicos
    container.innerHTML = `
      <div class="card">
        <h2>${produto.nome}</h2>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
        <p class="preco"><strong>Preço:</strong> R$ ${produto.preco}</p>
      </div>
    `;
  } catch (erro) {
    console.error('Erro ao buscar dados da API:', erro);
  }
}

// Executa a função automaticamente
carregarDados();