const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const path = require('path');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const app = express();

app.disable('x-powered-by');
app.use(compression());

app.use(express.static(path.resolve(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;

  console.log('Server started!');
});
