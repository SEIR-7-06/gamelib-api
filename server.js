const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 4000
const routes = require('./routes');

// Middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// Cross Origin Resource Sharing
app.use(cors());

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>GameLib API</h1>')
});

// Games API Routes
app.use('/api/v1/games', routes.games);
// Users API Routes
app.use('/api/v1/users', routes.users);
// Auth API Routes
app.use('/api/v1/auth', routes.auth);

// Listen For Requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
