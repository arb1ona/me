import React from 'react';
import './index.scss';
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title icon={'fas fa-heart'}>
                About Me
            </Title>
            <div className="row">
                <div className="column" style={{  textAlign: "justify"}}>
                    <strong>
                        Hi, I am Arbiona Shahu
                    </strong>
                    <p>
                        Architect turned to Full Stack Web Developer!
                        <br/>
                        I graduated from university with a Scientific Master's degree in Architecture and then ended up doing a series of internships with different construction firms. 
                        During the past two years, I put my efforts also in eCommerce and monetizing social media pages.

                        <br/> <br/>
                        This experience helped me to grow my independence, but this year I felt I needed something different in my life.
                        <br/>         
                        So, I joined STRIVE School with 0 knowledge in programming and it formed me as a full-stack web developer. 
                        The transformation has ben truly impressive and now, I can bring mockups to life as fully-functional applications!
                        
                        <br/><br/>
                        My goal is to work in a company that encourages its employees and helps them grow.
                        JavaScript and MERN Stack is something I would enjoy!

                    </p>
                </div>
            </div>
            <Title>
What I learned from programming?            </Title>
            <div className="row">
                <div className="column">
                <p>
                
                I have always been fascinated by how Architecture formed me as a problem-solver and critical-thinker! But it wasn't enough! I wanted more!

                        <br/><br/>
                        In addition to that, I started programming to learn how technologies worked. During this process, I found out that programming is a way of thinking, just like architecture, but in different scales and syntax.
                        
                        <br/> <br/>
                        As I Understood how JavaScript works, I believe that having a solid knowledge of core technologies allows developers to master any frameworks.                        <br/><br/>        
                        P.S. 
                        <br/>
Now, Thanks to programming, I am more pragmatic and practical than ever before. <br/>I love the new ME!

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
