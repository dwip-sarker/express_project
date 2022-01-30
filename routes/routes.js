const express = require('express');
const path = require('path');
const posts = require('../data/posts');

const router = express.Router();
router.get('/', (req, res) => {
    res.render('home');
});
router.get('/blog', (req, res) => {
    posts.forEach((element) => {
        console.log(element.title);
    });
    // res.sendFile(path.join(__dirname, '../template/blogHomepage.html'));
    res.render('blogHomepage', {
        posts,
    });
});
router.get('/blogpage/:slug', (req, res) => {
    const post = posts.filter((element) => element.slug === req.params.slug);
    // console.log(post )
    // res.sendFile(path.join(__dirname, '../template/postPage.html'));
    res.render('blogpage', {
        title: post[0].title,
        content: post[0].content,
    });
});

module.exports = router;
