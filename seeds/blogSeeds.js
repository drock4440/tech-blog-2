const { Blog } = require('../models')

const blogData = [
{
    title: "My Favorite Coding Languages",
    content: "I prefer to write in basic HTML/CSS/JS formats because I know how and understand it the monst",
    user_id: 1
},
{
    title: "Which computer do you prefer for coding?",
    content: "Most people rag on Mac's and call them the inferior device when it comes to coding. I love my Mac and would not trade it for the world. ",
    user_id: 2
},
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
