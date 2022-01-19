import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, } from '@fortawesome/free-brands-svg-icons'
import React, { Component } from 'react'
import "./Cv.css"

export default class about extends Component {
    render() {
        return (
            <div className='content'>
                <div className='soft-skills'>
                    <h1>Soft Skills</h1>
                    <ul>
                        <li>Problems Solving</li>
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Adaptability</li>
                        <li>Time Management</li>
                        <li>Empathy</li>
                        <li>Critica Thinking</li>
                    </ul>
                </div>
                <div className='hard-skills'>
                    <h1>Hard Skills</h1>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>NodeJs</li>
                        <li>PHP</li>
                        <li>Vue.JS</li>
                        <li>Laravel</li>
                        <li>MySql</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className='profile'>
                    <div className='info'>
                        <div>
                            <h3>Dimas Alfredo</h3>
                            <span>Associate's Degree </span>
                        </div>
                        <div className='links'>
                            <a href='https://instagram.com/dukunrakyat70'><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                            <a href='https://github.com/d-alfredo'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                            <a href='https://github.com/d-alfredo'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
