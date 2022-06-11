import React, {useState} from 'react';
import {CSSTransition} from 'react-transition-group';

function App() {
    return (
        <NavBar>
            <NavItem icon="⌨️">
                <DropdownMenu></DropdownMenu>
            </NavItem>
            <NavItem icon="🖱️"></NavItem>
            <NavItem icon="🚦"></NavItem>
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

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    
    function DropDownItem(props) {
        return (
            <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className='dropdown' style={{height: menuHeight}}>
            <CSSTransition in={activeMenu == 'main'} unmountOnExit timeout={500} classNames='menu-primary' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem>80%</DropDownItem>
                    <DropDownItem>75%</DropDownItem>
                    <DropDownItem goToMenu="60%" rightIcon="🡺">60%</DropDownItem>
                    <DropDownItem>40%</DropDownItem>
                    <DropDownItem>20%</DropDownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu == '60%'} unmountOnExit timeout={500} classNames='menu-secondary' onEnter={calcHeight}>
                <div className='menu'>
                    <DropDownItem leftIcon="🡸" goToMenu="main" />
                    <DropDownItem>Arrowed</DropDownItem>
                    <DropDownItem>Arrowless</DropDownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

function NavItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className='nav-item'>
            <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open && props.children}
        </li>
    );
}

export default App;