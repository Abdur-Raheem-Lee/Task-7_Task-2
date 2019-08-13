import React from 'react';
import  { Card, CardImg } from 'react-bootstrap';
import Logo from '../CV_Image.jpg';
import './Image.css';

function Image(props) {
    return (
        <div id="PersonalInfo">              
            <Card>
                <CardImg src={Logo} id="profileDP"></CardImg>
                <Card.Title><h3>Abdur-Raheem Lee</h3></Card.Title>
                    <Card.Header><b>Contact Information</b></Card.Header>
                        <Card.Text>
                            <ul id="list">
                                <li><b>Cell:</b> 081 735 0374</li>
                                <li><b>Email:</b> lee13october@gmail.com</li>
                            </ul>
                        </Card.Text>
                    <Card.Header><b>Postal Address</b></Card.Header>
                        <Card.Text>
                            50 Goodwood Street,
                            Goodwood,
                            7460
                        </Card.Text>
                    <Card.Text>
                        <ul id="list">
                            <li><b>Age:</b> 20 yrs</li>
                            <li><b>Languages:</b> English, Afrikaans (Read, Write, Speak)</li>
                            <li><b>Driving Licence</b> Yes</li>
                        </ul>
                    </Card.Text>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
            </Card>           
        </div>
    );
}

export default Image;