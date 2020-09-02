var express = require('express');
var router = express.Router();
var GAMES = require('../data/games');
var TOPICS = require('../data/topics');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/gamesList', function(req, res, next) {
  res.send({'status': 'Sucess', 'data': GAMES});
});
router.get('/topics', function(req, res, next) {
  res.send({'status': 'Sucess', 'data': TOPICS});
});
router.post('/submit', function(req, res, next) {
  console.log('req', req.body);
  res.send({'status': 'Sucess'});
});

module.exports = router;
