import express from 'express'
import EventController from '../controllers/events.js'

const router = express.Router()

router.get('/', EventController.getEvents)

router.get('/:eventId', EventController.getEventById)

router.get('/location/:location', EventController.getEventByLocation)

router.get('/locations', EventController.getUniqueLocations)

export default router