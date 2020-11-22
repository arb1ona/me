import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import {Row,Col} from 'react-bootstrap'
import './index.scss';
import react from '../../assets/react.png'
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Skills
            </Title>
            <ResumeItem
                title={'Tech Stack'}
            >
                 <Row className="skillz" md={4}>
                    <Col style={{backgroundColor:"blue"}}>1 of 5</Col>
                    <Col style={{width:"130px", padding:"0px 15px 0px 0px"}}>2 of 5</Col>
                    <Col style={{backgroundColor:"blue",width:"130px", padding:"0px 15px 0px 0px"}}>3 of 5</Col>
                    <Col style={{ width: "130px", padding: "0px 15px 0px 0px" }}>4 of 5</Col>
                    <Col style={{backgroundColor:"blue",width:"130px", padding:"0px 15px 0px 0px"}}>5 of 5</Col>
                </Row>
                
                {/* <img src={react} /> */}
            </ResumeItem>

            <ResumeItem
                date={'Mar 2017 – Apr 2019'}
                title={'JavaScript Developer'}
                company={'Beyn Technology'}
                logo={'https://media-exp1.licdn.com/dms/image/C4D0BAQGCja_0_IGhiA/company-logo_100_100/0?e=1612396800&v=beta&t=mYjWahrtMQiY2D4qgYX-pifsRkjENdc0huOwCfbnFlE'}
            >
                • Developed clean, maintainable and highly interactive single page web applications using
                Javascript, TypeScript, Angular, React, HTML, SASS. <br />
                • Responsible for design and development of the web pages from mock-ups (PSD). <br />
                • Worked the backend by using Node JS, Express and Mongo DB <br />
            </ResumeItem>
            <ResumeItem
                classNames={'not-last'}
                date={'Sep 2016 – Apr 2017'}
                title={'Java Developer'}
                company={'Aymet Yazilim'}
                logo={'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'}
            >
                • Involved in the implementation of the MVC arhitecture using spring. <br />
                • Connected to Data Sources and performed operations using Spring Data framework features like
                Spring JDBC and Spring ORM. <br />
                • Built RESTFul web services consume them using Angular JS. <br />
            </ResumeItem>
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'Apr 2020 - Oct 2020'}
                title={'STRIVE SCHOOL - 6 MONTHS CODING PROGRAM '}
                logo={'https://coursereport-production.imgix.net/uploads/school/logo/1045/original/strive-20school-20logo.png?w=200&h=200'}
                company={'Strive School is a Y Combinator company on a mission to train the next generation of software engineers in Europe. It provides +1000 hrs of online live lectures.'}
            >
                HTML5 | CSS | Bootstrap 4 | JavaScript | ReactJs ( Redux & Hooks) |<br></br> NodeJs | Express | TypeScript | MongoDB | PostgreSQL | REST APIs |<br></br> Azure | Heroku
            </ResumeItem>
            <ResumeItem
                date={'Oct 2012 – Oct 2020'}
                title={'MSc Architect - 5 Year Integrated Program '}
                company={'Tirana, Albania'}
                logo={'https://upload.wikimedia.org/wikipedia/sq/thumb/5/54/UPT_logo.svg/1200px-UPT_logo.svg.png'}

            >
                Polytechnic University of Tirana<br></br>
                Faculty of Architecture and Urbanism
            </ResumeItem>
        </div>
    );
};

export default Resume;
