import express from 'express';
import cors from 'cors';

const app = express();

// Habilita o CORS para permitir que o frontend faça o fetch
app.use(cors());

// Habilita o suporte a JSON
app.use(express.json());

// Rota GET / (Etapas 5 e 6 do PDF)
app.get('/', (req, res) => {
  res.json({
    nome: "Headset Gamer Lilás",
    preco: 299,
    categoria: "Acessórios"
  });
});

// Porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});