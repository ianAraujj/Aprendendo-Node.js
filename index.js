const express = require('express');

const server = express();

// localhost:3000/teste

// criando uma rota
server.get('/teste', () =>{
  console.log('Teste');
  // o servidor não vai parar de funcionar porque nós não estamos retornando nada
})

server.listen(3000);


// Para executar: node index.js