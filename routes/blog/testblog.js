var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog/blog_test', { title: 'blog' });
});

module.exports = router;
