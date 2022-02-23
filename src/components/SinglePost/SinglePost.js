import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useNavigate, useParams } from 'react-router-dom';

import './SinglePost.scss';

const SinglePost = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { getSinglePost, updatePost } = useContext(GlobalContext);

    const [post, setPost] = useState({
        title: '',
        body: '',
        id: ''
    });

    const onInputChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;

        setPost({
            ...post,
            [inputName]: value
        });
    }

    const updateCurrentPost = async () => {
        let dbRes = await updatePost(post);
    }

    const callDb = async () => {
        let res = await getSinglePost(params.id);
        setPost({ ...res });
    }

    useEffect(() => {
        callDb()
    }, []);

    return (
        <div className='container-fluid' id='single-post'>
            <button
                className='btn bttn-custom'
                onClick={() => navigate('/')}
            >Go Back...</button>

            <div className="single-post-body">
                <form className="edit-form">
                    <h2>Edit Post <span>ID: {post.id}</span></h2>
                    <label className="input-set">
                        <span>Title</span>
                        <input
                            type="text"
                            name='title'
                            value={post.title}
                            onChange={onInputChange}
                            required
                        />
                    </label>

                    <label className="input-set">
                        <span>Description</span>
                        <input
                            type="text"
                            name='body'
                            value={post.body}
                            onChange={onInputChange}
                            required
                        />
                    </label>

                    <section className="bttns-wrapper mt-4">
                        <button
                            type='button'
                            className="btn bttn-custom bttn-update me-3"
                            onClick={updateCurrentPost}
                        >Update</button>

                        <button type='button' className="btn bttn-custom bttn-del" >Delete</button>

                    </section>
                </form>
            </div>
        </div>
    )
}

export default SinglePost