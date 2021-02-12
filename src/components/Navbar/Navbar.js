import React, { Component } from 'react';
import { MenuItems } from './NavbarItems'
import './Navbar.css';

export default class Navbar extends Component {
    state = { 
        clicked : true 
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        return (
            <nav className="NavbarItems">

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    { MenuItems.map((item, index) => {
                      return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                   {item.title} 
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
                <h1 className="navbar-title">
                        Felipe<br></br>Fierro Dietz
                </h1>
            </nav>
        )
    }
}

