const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/editBlog/:id', withAuth, async (req, res) => {
  try {
      const updateBlog = await Blog.findByPk(req.params.id);
      console.log(updateBlog);
      if (updateBlog) {
        const blog = updateBlog.get({ plain: true });
        res.render('editBlog', {
          ...blog,
          logged_in: true
        });
      }
  } catch (err) {
      console.log(err);
      res.status(500).json(err);

  }
});
module.exports = router;