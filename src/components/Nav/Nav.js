import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='container-fluid' id='app-nav'>
            <ul className="ul-menu-list">
                <li className="li-logo">nikola chakarov</li>
                <li className="li-menu-item">
                    <Link to={'/'}>Action</Link>
                </li>
                <li className="li-menu-item">
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav