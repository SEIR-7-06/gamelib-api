const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>GameLib API</h1>')
});


// Listen For Requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
