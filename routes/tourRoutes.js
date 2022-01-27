import express from 'express'
import {createTour, getAllTours, getTour} from '../controllers/tourController.js'

const router = express.Router()

router
    .route('/')
    .get(getAllTours)
    .post(createTour)


router
    .route('/:id')
    .get(getTour)



export default router