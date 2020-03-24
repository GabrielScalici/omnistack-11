const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    name: 'gabriel',
    evento: 'semana',
  });
});

app.listen(3333);