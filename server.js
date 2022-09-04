import http from "http";
const porta = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.end('Curso de Node');
})

server.listen(porta, () =>{
  console.log(`Servidor escutando em http://localhost:${porta}`);
})