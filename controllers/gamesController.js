const db = require('../models');

const index = (req, res) => {
  // res.send('<h1>Games Index</h1>');

  // Query DB for all games
  db.Game.find({}, (err, allGames) => {
    if (err) return console.log(err);
    
    res.json(allGames);
    // res.json({
    //   numberOfGames: allGames.length,
    //   responedAt: new Date(),
    //   games: allGames,
    //   status: 200,
    // })
  });

};

const show = (req, res) => {
  res.send('<h1>Games Show</h1>');
};

const create = (req, res) => {
  res.send('<h1>Games Create</h1>');
};

const update = (req, res) => {
  res.send('<h1>Games Update</h1>');
};

const destroy = (req, res) => {
  res.send('<h1>Games Delete</h1>');
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};