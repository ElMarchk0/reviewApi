//Old dependencies
// const express = require('express')
// const router = express.Router()
// const Review = require('../models/Schema')


//new dependencies

import express from "express"
import ReviewController from '../controllers/controller.js'

const router = express.Router()

//Alternate code
router.route('/').get(ReviewController.getReviews)

router
    .route('/reviews/:id')
    .post(ReviewController.postReview)
    .delete(ReviewController.deleteReview)

export default router


// router.get('/', async (req, res) => {
//   const reviews = await Review.find()

//   res.json(reviews)
// })

// router.post('/new-review', async (req, res) => {
//   const newReview = new Review(req.body)

//   const savedReview = await newReview.save()

//   res.json(savedReview)
//   console.log(savedReview)
// })

// router.get('/get/:id', async (req, res) => {
//   const r = await Review.findById({ _id: req.params.id })

//   res.json(r)
// })

// router.delete('/delete/:id', async (req, res) => {
//   const deleteReview = await Review.findByIdAndDelete({_id: req.params.id})

//   res.json(deleteReview)
// })

// module.exports = router