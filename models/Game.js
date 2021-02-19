const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  publisher: String,
  coverArtUrl: String,
  completed: Boolean,
}, {timestamps: true});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
