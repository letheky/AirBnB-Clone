import React from 'react'
import {data} from '../data'
import TravelCard from '../travel-card/travel-card'
import './cardStyle.scss'

// type props = data

const Cards = () => {
    return (
        <div className="cards">
            {
            data.map(item=>{
                return (
                    <TravelCard
                    imageUrl = {item.imageUrl}
                    description = {item.description}
                    endDate = {item.endDate}
                    googleMapsUrl = {item.googleMapsUrl}
                    location = {item.location}
                    startDate = {item.startDate}
                    title = {item.title}
                    />
                )      
            })}
        </div>
    )
}


export default Cards