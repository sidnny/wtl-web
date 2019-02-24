var express = require('express');
var router = express.Router();

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Women Tech Leaders - Privacy Policy', pageId: 'privacy' });
});
router.get('/code_of_conduct', function(req, res, next) {
  res.render('coc', { title: 'Women Tech Leaders - Code of Conduct', pageId: 'code_of_conduct' });
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to Women Tech Leaders - A peer group for women in tech who are managing people and leading teams.', pageId: 'index' });
});

module.exports = router;
