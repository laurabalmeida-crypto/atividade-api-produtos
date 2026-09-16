import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


const produtos = [
  { id: 1, nome: 'Notebook', preco: 3500.00, categoria: 'Eletrônicos' },
  { id: 2, nome: 'Mouse Gamer', preco: 150.00, categoria: 'Acessórios' },
  { id: 3, nome: 'Teclado Mecânico', preco: 250.00, categoria: 'Acessórios' }
];


app.get('/', (req, res) => {
  res.send('API de Produtos rodando com sucesso!');
});


app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});


app.post('/api/produtos', (req, res) => {
  const { nome, preco, categoria } = req.body;

  if (!nome || !preco || !categoria) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos!' });
  }

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco: parseFloat(preco),
    categoria
  };

  produtos.push(novoProduto);
  
  res.status(201).json(novoProduto);
});
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});