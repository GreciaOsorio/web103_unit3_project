import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/api.js'
import '../css/Locations.css'

const locationThemes = [
    { gradient: 'linear-gradient(135deg, #1e3a5f, #2563eb)', icon: '🏙️' },
    { gradient: 'linear-gradient(135deg, #3b1f5e, #9333ea)', icon: '🌵' },
    { gradient: 'linear-gradient(135deg, #1a4a2e, #16a34a)', icon: '🏃' },
    { gradient: 'linear-gradient(135deg, #5e2a1a, #ea580c)', icon: '🌊' },
    { gradient: 'linear-gradient(135deg, #1a3a4a, #0891b2)', icon: '📍' },
    { gradient: 'linear-gradient(135deg, #3a1a4a, #7c3aed)', icon: '🎯' },
]

const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.fetchUniqueLocations()
                setLocations(locationsData)
            }
            catch (error) {
                console.log('Error fetching locations: ', error)
            }
        }) ()
    }, [])

    return (
        <div className='available-locations'>
            <h2 className='locations-heading'>Browse by Location</h2>
            <div className='ribbon-wrap'>
                <div className='ribbon'>
                    {locations.map((loc, index) => {
                        const theme = locationThemes[index % locationThemes.length]
                        return (
                            <Link
                                key={loc.location}
                                to={`/locations/${loc.location}`}
                                className='ribbon-card'
                                style={{ background: theme.gradient }}
                            >
                                <div className='ribbon-card-inner'>
                                    <div className='ribbon-icon'>{theme.icon}</div>
                                    <div className='ribbon-name'>{loc.location}</div>
                                    <div className='ribbon-tag'>View events →</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Locations