import React, { useState, useEffect } from "react";
import Event from "../components/Event";
import '../css/LocationEvents.css'
import LocationsAPI from '../services/api.js'

const AllEvents = () => {
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState('');

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

    useEffect(() => {
        (async () => {
            try {
                const data = await LocationsAPI.fetchUniqueLocations()
                setLocations(data)
            } catch (error) {
                console.log('Error fetching locations: ', error)
            }
        }) ()
    }, [])

    const filterEvents = selectedLocation
        ? events.filter(event => event.location === selectedLocation)
        : events;

    return (
        <div className="location-events">
            <header>
                <div className="location-info">
                    <h2>All Events</h2>
                </div>

                <div className="location-filter">
                    <select
                        value = {selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                        <option value=''>Filter by Location...</option>
                        {
                            locations.map(loc => (
                                <option key={loc.location} value={loc.location}>
                                    {loc.location}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </header>

            <main>
                {filterEvents && filterEvents.length > 0
                    ? filterEvents.map((event) => 
                        <Event 
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                        
                        />
                    )
                    :  <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> No events found!</h2>
                }

            </main>
        </div>
    )
}


export default AllEvents