import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';
import './Action.scss';

import CreateModal from '../CreateModal/CreatModal';

const Action = () => {
    const { getPosts, posts, clearScreen } = useContext(GlobalContext);

    const [showCreateModal, setShowCreateModal] = useState(false);


    return (
        <div className='container-fluid' id='action'>
            {/* create modal */}
            {showCreateModal && <CreateModal setShowCreateModal={setShowCreateModal} />}

            <section className="bttns-wrapper">
                <button className="btn bttn-custom bttn-create" onClick={() => setShowCreateModal(true)}>Create</button>

                <button className="btn bttn-custom bttn-read" onClick={getPosts}>Read</button>

                <button className="btn bttn-custom bttn-update" disabled>Update</button>

                <button className="btn bttn-custom bttn-del" disabled>Delete</button>

                <button className="btn bttn-custom bttn-reset" onClick={clearScreen}>Reset...</button>
            </section>

            <section className="action-body">
                <ul className="ul-posts">
                    {posts.map((el, i) => {
                        return (
                            <li className="li-post" key={i}>
                                <Link to={`/single-post/${el.id}`}>
                                    <h3>{el.title} <span>ID: {el.id}</span></h3>
                                    <span>Description: {el.body}</span>
                                    <span>City: {el.city}</span>
                                    <span>Love React: {el['love-react'] ? 'YES' : '...yes'}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default Action;