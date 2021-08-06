const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.use('/user/', (req, res, next) => {
  if(isUser()) next();
  else   res.sendFile(path.join(__dirname, '/views/forbidden.html'));
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

function isUser() {
  return false;
}