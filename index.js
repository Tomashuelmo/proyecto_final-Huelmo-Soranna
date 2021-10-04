const express = require ('express');
const app = express();

app.get('/', (req, res) =>{
  res.send('proyecto_final');
});

const port = 3000;

app.listen(4000);
