import React from 'react';
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import './index.scss';

const Menu = () => {
    return (
        <ul className="menu">
            <Menu.Item
                // name={"person"}
                link="/#about"
            >
                About
            </Menu.Item>
            <Menu.Item
                // name={"android-list"}
                link="/education#education"
            >
                Education
            </Menu.Item>
            <Menu.Item
               // name={'at'}
                link="/skills#skills"
            >
                Skills
            </Menu.Item>
            <Menu.Item
               // name={'paintbrush'}
                link="/projects#projects"
            >
                Projects
            </Menu.Item>
        </ul>
    );
};

Menu.Item = ({link = '#', children, name }) =>
    <li>
        <NavHashLink
            smooth
            to={link}
            activeClassName={'active'}
            exact>
            {/* <span className={`icon ion-${name}`} /> */}
            {children}
        </NavHashLink>
    </li>;

export default Menu;
