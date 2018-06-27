const { createServer } = require('http');
const express = require('express');
const compression = require('compression');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const server = createServer(app);

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.disable('x-powered-by');
app.use(compression());

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);

const routes = require('./routes');
app.use('/api/', routes);

app.use(express.static(path.resolve(__dirname, 'client/build')));

server.listen(PORT, err => {
  if (err) throw err;

  console.log('Server started!');
});
