const { Comment } = require('../models');

// creating comment data
const commentData = [
    {
        user_id: 1,
        blog_id: 2,
        comment: "Macs for LIFE!! #blockoutthehaters"
    },
    {
        user_id: 2,
        blog_id: 1,
        comment: "Oh man you are too old fashioned #getwiththetimes"
    },


]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;