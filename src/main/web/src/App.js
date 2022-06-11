import React from 'react';
import { ReactComponent as KeyboardIcon } from './icons/keyboard.svg';
import { ReactComponent as MouseIcon } from './icons/mouse.svg';
import { ReactComponent as LightIcon } from './icons/light.svg';

function App() {
    return (
        <NavBar>
            <NavItem icon={<KeyboardIcon />}></NavItem>
            <NavItem icon={<MouseIcon />}></NavItem>
            <NavItem icon={<LightIcon />}></NavItem>
        </NavBar>
    );
}

function NavBar(props) {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'> { props.children } </ul>
        </nav>
    );
}

function NavItem(props) {
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button'>
                {props.icon}
            </a>
        </li>
    );
}

export default App;