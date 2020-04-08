const express = require('express');

const server = express();

// Aqui é para dizer ao EXPRESS que o formato de leitura é JSON
server.use(express.json());


// Usar o Design Pattern: Middleware
server.use((req, res, next) => {
  return next();
})

function verificacoes(req, res, next) {
  if (!req.body.nome){
    return res.status(400).json({ERROR: "Não foi encontrado o objeto nome"});
  }

  if(!req.body.idade){
    return res.status(400).json({ERROR: "Não foi encontrado o objeto name"});
  }

  return next();
}

function check_param(req, res, next){
  const id = req.params.id;

  if ((id >= usuarios.length) || (id < 0) ){
    return res.status(400).json({ERROR: "Índice fora do intervalo"});
  }

  return next();

}

// ---------------FAZENDO um CRUD - Create, Read, Update and Delete -------
const usuarios = [
  {nome: 'Ian Luccas Araujo', idade: 21}, 
  {nome: 'Larisse Santos', idade: 19},
  {nome: 'Carlos Daniel', idade: 21}
]


server.post('/create/', verificacoes, (req, res) =>{

  usuarios.push({
    nome: req.body.nome,
    idade: req.body.idade
  })

  return res.send(usuarios);

})


// READ
// criando uma rota. Para definir nosso routes params, temos que especificar 
// isso na url
server.get('/list/:id', check_param, (req, res) =>{
  // Buscar params
  const id = req.params.id;

  //return res.send('Hello World');
  // OU
  return res.json({
    message: 'Hello ' + usuarios[id].nome,
    idade: 'Vc tem ' + usuarios[id].idade
  })
})

// READ ALL
server.get('/all/', (req, res) =>{
  return res.send(usuarios);
})


//UPDATE
server.put('/update/:id', check_param, verificacoes, (req, res) =>{

  const id = req.params.id;

  usuarios[id].nome = req.body.nome;
  usuarios[id].idade = req.body.idade;

  return res.send(usuarios);

})


//Delete
server.delete('/delete/:id', check_param, (req, res) =>{
  const id = req.params.id;

  usuarios.splice(id,1); 
  //esse '1' significa que é para deletar uma posição a partir do indíce passado

  return res.send(usuarios);
})



server.listen(3000);


