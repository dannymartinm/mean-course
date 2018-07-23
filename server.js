const http = require('http');

const server = http.createServer((req, resp) => {
  resp.end('This is my first response');
});

server.listen(process.env.PORT || 3000);
