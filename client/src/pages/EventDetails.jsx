import React, {useState, useEffect} from 'react';
import '../css/Event.css'
import { useParams } from 'react-router-dom';

const EventDetails = ({data}) => {

    const { id } = useParams()
    const [event, setEvent] = useState({id: 0, image: "", name: "", organizer: "", date: "", time: "", location: "", address: "", description: "", signUp: ""})


    useEffect(() => {
        const fetchEventById = async () => {
            const response = await fetch(`/events/${id}`)
            const data = await response.json()
            setEvent(data)
        }       

        fetchEventById()
    }, [data,id]);


    return (
        <div className="EventDetails">
            <main id="event-content" class="event-info">
                <div class="image-container">
                    <img id="image" src={event.image} />
                </div>
                <div class="event-details">
                    <h2 id="name">{event.name}</h2>
                    <p id="organizer">{'Organized By: ' + event.organizer}</p>
                    <p id="date">{'Date: ' + event.date}</p>
                    <p id="time">{'Time: ' + event.time}</p>
                    <p id="address">{event.address}</p>
                    <p id="description">{event.description}</p>
                    <p id="signUp"><a href={event.signUp}> Sign Up!</a></p>

                </div>
            </main>
        </div>
    )
}

export default EventDetails