import React from 'react';
import Title from "../common/Title";
import ContactForm from "./Form";
import mongo from "../../assets/mongo.png"
import express from '../../assets/express.png'
import react from '../../assets/react.png'
import node from '../../assets/node.png'
import redux from '../../assets/redux.png'
import herokuu from '../../assets/herokuu.png'
import azuree from '../../assets/azuree.png'
import javascriptt from '../../assets/javascriptt.png'
import bootstrapp from '../../assets/bootstrapp.png'
import materialuii from '../../assets/materialuii.png'
import {Row,Col} from 'react-bootstrap'


const Contact = () => {
    return (
        <div className="page" id="contact">
            <Title icon={'fa fa-briefcase'}>
                Web and Design
            </Title>
        
                 <Row className="skillz" md={4}>
                    <Col><img src={mongo} /><br></br><p>MongoDB</p></Col>
                    <Col><img src={express} /><br></br><p>Express</p></Col>
                    <Col><img src={react}/><br></br><p>React</p></Col>
                    <Col><img src={node} /><br></br><p>Node.js</p></Col>
                    <Col><img src={redux}/><br></br><p>Redux</p></Col>
                </Row>
             
                <Row className="skillz" md={4} style={{marginBottom:"2rem"}}>
                    <Col><img src={herokuu} /><br></br><p>Heroku</p></Col>
                    <Col><img src={azuree} /><br></br><p>Azure</p></Col>
                    <Col><img src={javascriptt}/><br></br><p>JavaScript</p></Col>
                    <Col><img src={bootstrapp} /><br></br><p>Bootstrap</p></Col>
                    <Col><img src={materialuii}/><br></br><p>Material UI</p></Col>
                </Row>
            {/* <ContactForm/> */}
        </div>
    );
};

export default Contact;
