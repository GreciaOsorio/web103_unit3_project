import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import '../css/LocationEvents.css'
import LocationsAPI from '../services/api.js'

const AllEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await LocationsAPI.fetchEvents()
                setEvents(data)
            } catch (error) {
                console.log('Error fetching all events: ', error)
            }
        }) ()
    }, [])

    return (
        <div className="location-events">
            <header>
                <div className="location-info">
                    <h2>All Events</h2>
                </div>
            </header>

            <main>
                {events && events.length > 0
                    ? events.map((event) => 
                        <Event 
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        
                        />
                    )
                    : <h2><i className="fa-regular fa-calendar-xmark fa-shake"> No events found!</i></h2>
                }
            </main>
        </div>
    )
}


export default AllEvents