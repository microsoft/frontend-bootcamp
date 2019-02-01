// @ts-check
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const store = {
  /** @type {any} */
  todos: {}
};

app.use(bodyParser.json());
app.use(cors());

app.get('/todos', (req, res) => {
  res.json(store.todos);
});

app.put('/todos/:id', (req, res) => {
  store.todos[req.params.id] = req.body;
  res.json('ok');
});

app.post('/todos/:id', (req, res) => {
  store.todos[req.params.id] = req.body;
});

app.delete('/todos/:id', (req, res) => {
  delete store.todos[req.body.id];
});

app.post('/todos', req => {
  store.todos = req.body;
});

app.listen(process.env.NODE_ENV === 'production' ? undefined : 3000, () => {
  console.log('Listening at http://localhost:3000');
});
