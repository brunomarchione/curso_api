const express = require('express');
const app = express();
const PORT = 3000;

const cursoRoutes = require('./routes/cursoRoutes');

app.use(express.json());

app.use('/api', cursoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});