import React, { Component } from 'react';
import { MenuItems } from './NavbarItems'
import './Navbar.css';

export default class Navbar extends Component {

    render(){
        return (
            <nav className="NavbarItems">
                <div className="menu-icon">

                </div>
                <ul>
                    { MenuItems.map( (item, index) => {
                      return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                            )  
                    })}
                </ul>
                
                <h1> <strong> Felipe Fierro </strong></h1>
            </nav>
        )
    }
}