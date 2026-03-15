import { pool } from '../config/database.js'

const getEvents = async(req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

const getEventById = async (req, res) => {
    try{
        const selectQuery =
        `
            SELECT image, name, organizer, date, time, location, address, description, signUp 
            FROM events
            WHERE id = $1
        `
        const eventId = req.params.eventId

        const results = await pool.query(selectQuery, [eventId])
        res.status(200).json(results.rows[0])

    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

const getEventByLocation = async(req, res) => {
    try { 
        const selectQuery = `
            SELECT * FROM events WHERE location = $1 ORDER BY id ASC
        `
        const eventLocation = req.params.eventLocation

        const results = await pool.query(selectQuery, [eventLocation])
        res.status(200).json(results.rows[0])
    } catch(error) {
        res.status(400).json( { error: error.message } )
    }
}

const getUniqueLocations = async (req, res) => {
    try {
        const results = await pool.query(' SELECT DISTINCT location FROM events ORDER BY location ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json( { error: error.message } )
    }
}

export default {
    getEvents,
    getEventById,
    getEventByLocation,
    getUniqueLocations
}