import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import logo from "./logo.png"
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../Button';

export default class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked});
    }

    render() {
        return (
            <nav className='NavbarItems'>
                <img src={logo} alt="logo" height="50px" className='navbar-logo' />
                <div className='menu-icon' onClick={this.handleClick}>
                    <FontAwesomeIcon icon={this.state.clicked ? faTimes : faBars} color='#888' size='2x'/>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                        )
                    })}
                </ul>
                <Button>Subscribe</Button>
            </nav>
        )
    }
}
