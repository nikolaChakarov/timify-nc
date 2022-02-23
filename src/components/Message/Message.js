import React from 'react';
import './Message.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Message = ({ message, showMessage, setShowMessage }) => {

    return (
        <div className='container-flui' id='message-el' style={{
            display: showMessage ? 'flex' : 'none'
        }}>
            <span>{message}</span>
            <FontAwesomeIcon className='icon' icon={faXmark} onClick={() => setShowMessage(false)} />
        </div>
    )
}

export default Message;