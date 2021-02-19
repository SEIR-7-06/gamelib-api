const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/api/v1/games'

// Game Index
router.get('/', controllers.games.index);

// Game Show
router.get('/:id', controllers.games.show);

// Game Create
router.post('/', controllers.games.create);

// Game Update
router.put('/:id', controllers.games.update);

// Game Delete
router.delete('/:id', controllers.games.destroy);

module.exports = router;
