import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Read.scss';

const Read = () => {
    const { readPost } = useContext(GlobalContext);

    return (
        <div className='container-fluid' id='read'>

        </div>
    )
}

export default Read