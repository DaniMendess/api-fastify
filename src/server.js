import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js'


/* 
  Minuto 1:03:45 

  criar base da dados no banco postgres

*/





const server = fastify();
const port = 3333;

// Método GET, POST, PUT, REMOVE

const database = new DatabaseMemory()

// Request Body

server.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body

  database.create({
    title: title,
    description: description,
    duration: duration
  })


  return reply.status(201).send()
});

server.get('/videos', () => {
  const videos = database.list()

  return videos
});

server.put('/videos/:id', (request, reply) => {
  const videoId = request.params.id
  const { title, description, duration } = request.body

  database.update(videoId, {
    title,
    description,
    duration
  })

  return reply.status(204).send()
});


server.delete('/videos/:id', (request, reply) => {
  const videoId = request.params.id

  console.log(videoId)

  database.delete(videoId)

  return reply.status(204).send()
})


server.listen(
  {
    port,
  },
  console.log('Deu certo piva 👌'),
);



/* Request Body 

  Recebe os dados da requisição no corpo da requisição, em um objeto em JSON. Sempre utilizando no método POST da requisição.

*/ 

/* Route parameters

  Recebe os dados da requisição na rota.
  Caso de uso: Melhor maneira para buscar algo específico, deletar ou atualizar usando o identificador único

*/ 

/* Query params 

  Recebe os dados da requisição como parâmetro na URL.

  Caso de uso: Filtros para fazer consultas na aplicação.
  Pode conter um ou mais parâmetros:

  Exemplos:
  http://minhaapi.com/banks?name=nubank
*/
