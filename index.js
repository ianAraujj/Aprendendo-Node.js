const express = require('express');

const server = express();

// criando uma rota. Para definir nosso routes params, temos que especificar 
// isso na url
server.get('/teste/:id', (req, res) =>{
  // Bucar os query
  const nome = req.query.nome;
  // Buscar params
  const id = req.params.id;

  //return res.send('Hello World');
  // OU
  return res.json({
    message: 'Hello ' + nome,
    id: id,
  })

})

server.listen(3000);




// Para executar: node index.js
// http://localhost:3000/teste/300?nome=Ian