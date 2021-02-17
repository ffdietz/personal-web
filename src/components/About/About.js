import React, { Component } from 'react';
import './About.css';

export class About extends Component {

    render() {
        return (
            <div className="about">
                <h1 className="about-title">
                    About
                </h1>

                <p className="about-paragraph">
                    SP<br></br>
                    Es artista visual e investigador chileno, actualmente con base en Berlin.
                    Su temprana incursión en ciencias y posterior formación como artista fotógrafo, lo ha llevado a trabajar las relaciones entre las artes visuales y el lenguaje científico, utilizando la tecnologías eléctricas/electrónicas como puente comunicante.
                    <br></br>
                    EN<br></br>
                    He is a Chilean visual artist and researcher, currently based in Berlin.
                    His early foray into science and subsequent training as a photographer artist, has led him to work on the relationships between visual arts and scientific language, using electrical / electronic technologies as a communicating bridge.
                </p>
            </div>

        )
    }
}

export default About
