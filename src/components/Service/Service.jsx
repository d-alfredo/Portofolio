import React from 'react'
import { Card } from './card'
import './Service.css'

export default function Service() {
    return (
        <div className='main'>
            <h1>My Service</h1>
                <div className='cards'>
                        {Card.map((item, index) => {
                        return(
                        <div className='card' key={index}>
                                <img src={item.image} alt='img'/>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>    
                        </div>
                        )})};
                </div>
        </div>
    )
}
