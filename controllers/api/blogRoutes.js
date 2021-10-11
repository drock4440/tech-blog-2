const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        })

        res.status(200).json(newBlog)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.put('/:id', withAuth, async (req, res) => {
try {
    const updateBlog = await Blog.update(
        {
        id: req.params.id,
       
        content: req.body.content,
        ttitle: id
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        })
    if (!updateBlog) {
        res.status(404).json({message: 'There is no blog with this id!'})
        return;
    }
    res.status(200).json(updateBlog);
} catch (err) {
    console.log(err);
    res.status(500).json(err)
}
})
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },

        })

    if (!blogData) {
        res.status(404).json({ message: 'Blog not found'})
    }
    } catch (error) {
        console.log('I ame the error', err);
        res.status(500).json(err)
        
    }
})

module.exports = router