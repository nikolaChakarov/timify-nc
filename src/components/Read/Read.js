import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Read.scss';

const Read = () => {
    const { getPosts } = useContext(GlobalContext);

    return (
        <div className='container-fluid' id='read'>

        </div>
    )
}

export default Read