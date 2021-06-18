const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Great comment',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Better comment',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'Best comment',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Another comment',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'One more comment',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'Absolute best comment',
    user_id: 3,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;