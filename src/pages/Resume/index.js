import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import {Row,Col} from 'react-bootstrap'
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            {/* <Title icon={'fa fa-briefcase'}>
                Skills
            </Title> */}
    

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
