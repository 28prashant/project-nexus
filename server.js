const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Handle user signup
app.post('/signup', (req, res) => {
  const { email } = req.body;

  // Perform user registration logic (you can use a database to store user information)

  // For demonstration purposes, simply send a success message
  res.json({ message: 'User successfully signed up!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
