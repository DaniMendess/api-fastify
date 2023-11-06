import { fastify } from 'fastify';

const server = fastify();
const port = 3333;

// Método GET, POST, PUT, REMOVE

server.get('/', () => 'Hello world');

server.listen(
  {
    port,
  },
  console.log('Deu certo piva 👌'),
);
