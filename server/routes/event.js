import express from 'express'
import EventController from '../controllers/events.js'

const router = express.Router()

router.get('/', EventController.getEvents)

router.get('/locations', EventController.getUniqueLocations)

router.get('/locations/:location', EventController.getEventByLocation)

router.get('/:eventId', EventController.getEventById)

export default router