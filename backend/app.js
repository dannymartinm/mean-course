const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS, PUT'
  );
  next();
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
