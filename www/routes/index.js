var axios = require('axios');
var express = require('express');
var router = express.Router();

const CDN = (process.env.NODE_ENV === 'production') ? 'https://cdn.wtl.nyc' : '';

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { cdn: CDN, title: 'Women Tech Leaders - Privacy Policy', pageId: 'privacy' });
});
router.get('/code_of_conduct', function(req, res, next) {
  res.render('coc', { cdn: CDN, title: 'Women Tech Leaders - Code of Conduct', pageId: 'code_of_conduct' });
});
router.get('/', function(req, res, next) {
  axios.get('https://api.meetup.com/2/events?key=105d6a6a1487e4b58676725161d183b&group_urlname=wtl-women-tech-leaders-nyc&sign=true')
    .then(function (response) {
      res.render('index', { cdn: CDN, title: 'Welcome to Women Tech Leaders.', pageId: 'index', events: response.data.results });
    })
    .catch(function (error) {
      console.error(error);
      res.render('index', { cdn: CDN, title: 'Welcome to Women Tech Leaders.', pageId: 'index' });
    });
});

module.exports = router;
