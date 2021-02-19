const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/gamelib-1207';
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(connectionString)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));
