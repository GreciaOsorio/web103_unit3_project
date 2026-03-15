import React, {useState, useEffect} from 'react';
import '../css/Event.css'
import { useParams } from 'react-router-dom';

const eventDetails = ({data}) => {

    const { id } = useParams()
    const [event, setEvent] = useState({id: 0, image: "", name: "", organizer: "", date: "", time: "", location: "", address: "", description: "", signUp: ""})


    useEffect(() => {
        const fetchEventById = async () => {
            const response = await fetch(`/events/${id}`)
            const data = await response.json()
            setEvent(json)
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
                    <p id="submittedBy">{'Submitted By: ' + event.submittedby}</p>
                    <p id="pricePoint">{'Price: ' + event.pricepoint}</p>
                    <p id="audience">{'Great For: ' + event.audience}</p>
                    <p id="description">{event.description}</p>
                </div>
            </main>
        </div>
    )
}

export default eventDetails