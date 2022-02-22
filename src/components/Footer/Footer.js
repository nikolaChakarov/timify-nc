import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='container-fluid' id='footer-app'>
            <span>nc &copy; 2022 App made for</span>
            <button className='btn bttn-custom' onClick={() => window.location.href = 'https://www.timify.com/bg-bg/'}>Timify</button>
        </div>
    )
}

export default Footer