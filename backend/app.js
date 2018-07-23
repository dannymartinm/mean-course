const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS, PUT'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  //201: everything is ok. New resource is created.
  res.status(201).json({
    message: 'Post added sucessfully'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: '1234XX',
      title: 'First server-side post',
      content: 'This is coming from the server'
    },
    {
      id: '1234XYZ',
      title: 'Second server-side post',
      content: 'This is coming from the server!'
    }
  ];
  return res.status(200).json({
    message: 'Post fetch succesfully',
    posts: posts
  });
});

module.exports = app;
