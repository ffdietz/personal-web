import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { AboutVersion } from "./AboutVersion";
import './About.css';

export default class About extends Component {
    state = {
        lang: 'esp'
    }

    handleClick = (props) => {
        console.log(props);
        this.setState({
            lang: this.props.language
        })
    }

    render() {
        return (
            <div className="about">
                <div>
                    <h1 className="about-title">
                        About
                    </h1>

                    <div className="buttons-container">
                        {AboutVersion.map ((item, index) => {
                            return (
                                <Button key={index} className="language-button" onClick={ () => this.handleClick(item.language)}>
                                    {item.language}
                                </Button>
                            )
                        })}
                    </div>
                </div>

                <div className="biography-container">
                    {/* { AboutVersion.filter(this.state.lang) => {
                        return(
                            <p>
                                {AboutVersion.text}
                            </p>
                            )
                        }
                    } */}
                </div>

                    {/* ESP<br></br>
                    Es artista visual e investigador chileno, actualmente con base en Berlin.
                    Su temprana incursión en ciencias y posterior formación como artista fotógrafo, lo ha llevado a trabajar las relaciones entre las artes visuales y el lenguaje científico, utilizando la tecnologías eléctricas/electrónicas como puente comunicante.
                    <br></br>
                    ENG<br></br>
                    He is a Chilean visual artist and researcher, currently based in Berlin.
                    His early foray into science and subsequent training as a photographer artist, has led him to work on the relationships between visual arts and scientific language, using electrical / electronic technologies as a communicating bridge. */}
                {/* </div> */}
            </div>

        )
    }
}

