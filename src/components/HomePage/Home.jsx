import React from 'react'
import './Home.css'
import Navbar from '../navbar/Navbar'
export default function Home() {
    return (
        <div className='home'>
            <Navbar />
            <div className='content'>
                <h1>Hi, I'm <br></br>
                <em> Dimas Alfredo </em><br></br>
                Junior <br></br>
                Web Developer.
                </h1>
            </div>
        </div>
    )
}
