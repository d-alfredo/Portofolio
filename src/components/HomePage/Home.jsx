import React from 'react'
import './Home.css'
import Navbar from '../navbar/Navbar'
export default function Home() {
    return (
        <div className='home'>
            <Navbar />
            <section>
                <h2>Hi, I'm</h2>
                <h1>Dimas alfredo</h1>
                <p><em>Junior
                Web Developer.</em></p>
            </section>
        </div>
    )
}
