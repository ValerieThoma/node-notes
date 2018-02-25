const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello, express!</h1>');
  res.send({
    name: 'Valerie',
    likes: [
      'Reading',
      'Writing',
      'Hiking',
      'Televison'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Bad Request'
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});