const express = require('express');

// express app
const app = express();


app.listen(3000);

// registra  view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/visualizacion');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Node', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'JS', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mongo', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create un nuevo blog' });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});