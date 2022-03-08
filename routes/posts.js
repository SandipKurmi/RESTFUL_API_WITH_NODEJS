const express = require('express')
const router = express.Router()
const Post = require('../models/Post')



//get back all the post
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json({ message: error })
    }

})

// router.get('/specific', (req, res) => res.send('this is gone be specific posts'))

//submit the post
router.post('/', async(req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })

        await post.save()
        res.json(post)

    } catch (error) {
        console.log(error)
        res.send("this is ununique post")

    }


})


//specific post 
router.get('/:id', async(req, res) => {

    try {
        const post = await Post.findById(req.params.id)
        res.json(post);
    } catch (error) {
        res.json({ message: error })

    }
})


//delet post
router.delete('/:id', async(req, res) => {
    try {
        const post = await Post.remove({ _id: req.params.id })
        res.json(post)

    } catch (error) {
        res.json({ message: error })

    }


})


//update a post
router.put('/:id', async(req, res) => {
    try {
        const post = await Post.updateOne({ _id: req.params.id }, { $set: { title: req.body.title } })
        res.json(post)

    } catch (error) {
        res.json({ message: error })

    }


})


module.exports = router;