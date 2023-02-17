import React from 'react'
import './travel-cardStyle.scss'

type Props = {
    title: string
    location: string
    googleMapsUrl: string
    startDate: string
    endDate: string
    description: string
    imageUrl: string
}

function TravelCard(props: Props) {
  return (
    <div className='travel-card'>
        <img src={props.imageUrl} alt="card image" />
        <div className="content">
            <div className="location">
                <i className="fa-solid fa-location-dot"></i>
                <p>{props.location}</p>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h4>{props.startDate} - {props.endDate}</h4>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default TravelCard