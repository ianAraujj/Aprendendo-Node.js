const express = require('express');

const server = express();

const usuarios = [{nome: 'Ian Luccas', idade: 21}, {nome: 'Larisse Santos', idade: 19}]

// criando uma rota. Para definir nosso routes params, temos que especificar 
// isso na url
server.get('/teste/:id', (req, res) =>{
  // Buscar params
  const id = req.params.id;

  //return res.send('Hello World');
  // OU
  return res.json({
    message: 'Hello ' + usuarios[id].nome,
    idade: 'Vc tem ' + usuarios[id].idade
  })

})

server.listen(3000);




// Para executar: node index.js