import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Retorna uma Lista (Array) de 3 produtos
app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      nome: "Headset Gamer Lilás",
      preco: 299,
      categoria: "Acessórios"
    },
    {
      id: 2,
      nome: "Teclado Mecânico RGB",
      preco: 250,
      categoria: "Periféricos"
    },
    {
      id: 3,
      nome: "Mouse Pad Extra Grande",
      preco: 80,
      categoria: "Acessórios"
    }
  ]);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});