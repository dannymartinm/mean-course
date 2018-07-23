const express = require('express');

const app = express();

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
