import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Message = ({ message }) => {
    const [click, setClick] = useState(false);

    return (
        <div className='container-flui' id='message-el' style={{
            display: click ? 'none' : ''
        }}>
            <span>{message}</span>
            <FontAwesomeIcon icon={faXmark} onClick={() => setClick(true)} />
        </div>
    )
}

export default Message;