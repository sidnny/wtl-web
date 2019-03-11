var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect(307, 'https://wtl-slack-invite.herokuapp.com/');
});

module.exports = router;
