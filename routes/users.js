const router = require('express').Router();
const usersCtrl = require('../controllers/usersController');

// CURRENT PATH = '/api/v1/users'

router.post('/', usersCtrl.create);

module.exports = router;
