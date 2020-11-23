import React, { useContext } from 'react';
import './index.scss';
import { ThemeContext } from "../../context/ThemeContext";

const Skills = () => {
    const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } = useContext(ThemeContext);

    function handleMouseEnter(e) {
        const type = e.nativeEvent.target.id;
        if (type) {
            changeTheme(type)
        }
    }

    return (
        <div className="skills">
            <h6>Web Skills</h6>
            {/* <ul onMouseEnter={stopThemeChangeTimer}
                onMouseLeave={startThemeChangeTimer}
                onMouseOver={handleMouseEnter} > */}
            <ul>
                <li id="react" >React</li>
                <li id="redux">Redux</li>
                <li id="javascript">JavaScript</li> 
                <li id="node">Node</li>
                <li id="express">Express</li>
                <li id="mongodb">MongoDB</li>
                <li id="azure">Azure</li>
                <li id="rest">REST Api</li>
            </ul>
            <h6>Design Skills</h6>
            <ul>
                <li id="photoshop">Photoshop</li>
                <li id="illustrator">Illustrator</li> 
                <li id="3dmax">3DMax</li>
                <li id="autocad">Autocad</li>
            </ul>
        </div>
    );
};

export default Skills;
