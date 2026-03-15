import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import { useParams } from 'react-router-dom'
import locationsAPI from '../services/api.js'

const LocationEvents = () => {
    const { location } = useParams();

    const [locationEvents, setLocationEvents] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const events = await locationsAPI.fetchEventsByLocation(location)
                setLocationEvents(events)
            } catch (error) {
                console.log('Error fetching location events: ', error)
            }
        }) ()
    }, [location])
    
    
    
    return (
        <div className='location-events'>
            <header>
                <div className='location-info'>
                    <h2>{location}</h2>
                </div>
            </header>

            <main>
                {locationEvents && locationEvents.length > 0
                    ? locationEvents.map((event) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        />
                    )
                    : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents