import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/saludo/:name", (req, res) => {
  const params = req.params;
  res.send('Hola ' + params['name']);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});