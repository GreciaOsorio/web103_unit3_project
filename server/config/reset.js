import { pool } from './database.js'
import './dotenv.js'
import eventData from '../data/Events.js'

const createEventsTable = async() => {

    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            image TEXT NOT NULL,
            name VARCHAR(255) NOT NULL,
            organizer VARCHAR(255) NOT NULL,
            date VARCHAR(255) NOT NULL,
            time VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            address TEXT NOT NULL,
            description TEXT NOT NULL,
            signUp TEXT NOT NULL
        )
    `

    try{
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch(err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedEventsTable = async() => {
    await createEventsTable()

    const insertPromises = eventData.map((event) => {
        return new Promise((resolve, reject) => {
            const insertQuery = {
                text: `INSERT INTO events (image, name, organizer, date, time, location, address, description, signUp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
            }

            const values = [
                event.image,
                event.name,
                event.organizer,
                event.date,
                event.time,
                event.location,
                event.address,
                event.description,
                event.signUp
            ]

            pool.query(insertQuery, values, (err, res) => {
                if (err) {
                    console.error('⚠️ error inserting event', err)
                    reject(err)
                    return
                }

                console.log(`✅ ${event.name} added successfully`)
                resolve(res)
            })
        })
    })

    try {
        await Promise.all(insertPromises)
        console.log('🎉 All events seeded successfully')
    } catch (error) {
        console.error('⚠️ Error seeding events:', error)
    }
}

(async () => {
    await seedEventsTable()
    process.exit(0)
})()