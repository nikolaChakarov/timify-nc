import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './Action.scss';

import CreateModal from '../CreateModal/CreatModal';

const Action = () => {
    const { readPost, posts, clearScreen } = useContext(GlobalContext);

    const [showCreateModal, setShowCreateModal] = useState(false);

    console.log(posts, 'app');

    return (
        <div className='container-fluid' id='action'>
            {/* create modal */}
            {showCreateModal && <CreateModal setShowCreateModal={setShowCreateModal} />}

            <section className="bttns-wrapper">
                <button className="btn bttn-custom bttn-create" onClick={() => setShowCreateModal(true)}>Create</button>
                <button className="btn bttn-custom bttn-read" onClick={readPost}>Read</button>
                <button className="btn bttn-custom bttn-update" disabled>Update</button>
                <button className="btn bttn-custom bttn-del" disabled>Delete</button>
                <button className="btn bttn-custom bttn-reset" onClick={clearScreen}>Reset...</button>
            </section>

            <section className="action-body">
                <ul className="ul-posts">
                    {posts.map((el, i) => {
                        return <li className="li-post" key={i}>
                            <span>{el.title}</span>
                            <span>{el.body}</span>
                        </li>
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Action;