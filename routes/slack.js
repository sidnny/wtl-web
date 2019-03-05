var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.redirect(307, 'https://wtlnyc-slack.herokuapp.com');
});

module.exports = router;
