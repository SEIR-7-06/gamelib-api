const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000
const routes = require('./routes');

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>GameLib API</h1>')
});

app.use('/api/v1/games', routes.games);

// Listen For Requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
