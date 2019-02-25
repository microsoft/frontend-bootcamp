// @ts-check
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const store = {
  /** @type {any} */
  read() {
    if (fs.existsSync('tmp.json')) {
      store.todos = JSON.parse(fs.readFileSync('tmp.json').toString());
    } else {
      store.todos = {};
    }

    return store.todos;
  },

  save() {
    fs.writeFileSync('tmp.json', JSON.stringify(store.todos));
  },

  todos: {}
};

app.use(bodyParser.json());
app.use(cors());

app.get('/todos', (req, res) => {
  res.json(store.read());
});

app.put('/todos/:id', (req, res) => {
  store.todos[req.params.id] = req.body;
  store.save();
  res.json('ok');
});

app.post('/todos/:id', (req, res) => {
  store.todos[req.params.id] = req.body;
  store.save();
  res.json('ok');
});

app.delete('/todos/:id', (req, res) => {
  delete store.todos[req.params.id];
  store.save();
  res.json('ok');
});

app.post('/todos', (req, res) => {
  store.todos = req.body;
  store.save();
  res.json('ok');
});

app.get('/hello', (req, res) => {
  res.send('world');
});

app.listen(process.env.NODE_ENV === 'production' ? undefined : 3000, () => {
  console.log('Listening at http://localhost:3000');
});
