import React, {useState, useEffect} from 'react';
import '../css/EventDetails.css'
import { useParams } from 'react-router-dom';
import locationsAPI from '../services/api.js'

const EventDetails = () => {

    const { id } = useParams()
    const [event, setEvent] = useState({id: 0, image: "", name: "", organizer: "", date: "", time: "", location: "", address: "", description: "", signup: ""})


    useEffect(() => {
        const fetchEventById = async () => {
            const data = await locationsAPI.fetchEventById(id)
            setEvent(data)
        }       

        fetchEventById()
    }, [id]);


    return (
        <div className="EventDetails">
            <main id="event-content" class="event-info">
                <div class="image-container">
                    <img id="image" src={event.image} />
                </div>
                <div class="event-details">
                    <h2 id="name">{event.name}</h2>
                    <hr width="100%" size="2"></hr>
                    <p id="organizer">{'Organized By: ' + event.organizer}</p>
                    <p id="date">{'Date: ' + event.date}</p>
                    <p id="time">{'Time: ' + event.time}</p>
                    <p id="address">{'Address: ' + event.address}</p>
                    <p id="description">{event.description}</p>
                    <p id="signUp" className='signup-button' role='button'><a href={event.signup}> Sign Up!</a></p>

                </div>
            </main>
        </div>
    )
}

export default EventDetails