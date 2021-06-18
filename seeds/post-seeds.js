const { Post } = require('../models');

const postdata = [
  {
    title: 'My first post',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'My Better post',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'Second user here',
    post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 3
  },
  {
    title: 'You should comment here',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 1
  },
  {
    title: 'Third times the charm',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 2
  },
  {
    title: 'Posty post',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;