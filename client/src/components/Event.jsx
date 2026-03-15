import React from 'react'
import '../css/Event.css'
import { Link } from 'react-router-dom'

const Event = (props) => {

    return (
        <article className='event-information'>
            <Link to={`/event/${props.id}`}>
                <img src={props.image} alt={props.title} />

                <div className='event-information-overlay'>
                    <div className='text'>
                        <h3>{props.title}</h3>
                        <p>
                            <i className="fa-regular fa-calendar fa-bounce"></i> {props.date} <br /> {props.time}
                        </p>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default Event