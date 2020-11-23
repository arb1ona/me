import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import placeholder from "../../assets/placeholder.png"
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import { useAnimation } from "../../use/animation";
import arbiona from '../../assets/arbiona.png'

const Profile = () => {
    const { backgroundImage, type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <img src={arbiona} alt={type} />
            </div>
            {/* <div className="profile__pic">
                <img src={arbiona} alt={type} />
            </div> */}
            <div className="profile__content">
                <div className="profile__title">
                    Arbiona Shahu
                </div>
                {/* <div className="profile__stack">
                Full Stack Developer
                </div> */}
                <TypedText
                  dataText={
                      [
                          'Full Stack Developer',
                          'Architect',
                          'Graphic Designer'
                      ]
                  }
                />
                <div className="profile__location">
                <i class="fas fa-map-marker-alt"></i>                    {/* <img src={placeholder} style={{ width: "20px" }} /> */}
                    Tirana, Albania
                </div>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href="https://drive.google.com/file/d/1KS59x7gIOht-r6pZ3DaV5kDDxSsqXNML/view?usp=sharing" target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:arbiona.shahu@gmail.com">
                        <span>
                        <SocialLinks/>
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
