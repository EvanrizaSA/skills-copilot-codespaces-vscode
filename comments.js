// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Parse the request body as JSON
app.use(express.json());
// Create a new array to store comments
const comments = [];
// Create a new comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.status(201).send('Comment added!');
});
// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});