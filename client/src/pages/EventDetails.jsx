import React, {useState, useEffect} from 'react';
import '../css/EventDetails.css'
import { useParams } from 'react-router-dom';
import locationsAPI from '../services/api.js'

const EventDetails = () => {

    const { id } = useParams()
    const [event, setEvent] = useState({id: 0, image: "", name: "", organizer: "", date: "", time: "", location: "", address: "", description: "", signup: ""})
    const [timeRemaining, setTimeRemaining] = useState(null);

    useEffect(() => {
        const fetchEventById = async () => {
            const data = await locationsAPI.fetchEventById(id)
            setEvent(data)
        }       

        fetchEventById()
    }, [id]);

    useEffect(() => {
        if (!event.date) return;

        const calculateTimeRemaining = () => {
            const eventDate = new Date(event.date)
            const now = new Date()
            const diff = eventDate - now

            if (diff <= 0) {
                setTimeRemaining( { expired: true } )
                return
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24))
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((diff % (1000 * 60)) / 1000)

            setTimeRemaining( {days, hours, minutes, seconds, expired: false })
        }

        calculateTimeRemaining()
        const interval = setInterval(calculateTimeRemaining, 1000)

        return () => clearInterval(interval)
    }, [event.date])


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

                    {timeRemaining && (
                        timeRemaining.expired
                            ? <p className='negative-time-remaining'>This event has passed 😥</p>
                            : <div className='countdown'>
                                <h2>Time Until Event</h2>
                                <div className='countdown-boxes'>
                                    <div className='countdown-box'><span>{timeRemaining.days}</span><p>Days</p></div>
                                    <div className='countdown-box'><span>{timeRemaining.hours}</span><p>Hours</p></div>
                                    <div className='countdown-box'><span>{timeRemaining.minutes}</span><p>Minutes</p></div>
                                    <div className='countdown-box'><span>{timeRemaining.seconds}</span><p>Seconds</p></div>
                                </div>
                            </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default EventDetails