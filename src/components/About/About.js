import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className='container-fluid' id='about'>
            <h3>Hello, just a small explanation of app's way of working</h3>

            <p>on <span>READ</span> click, we load the posts from the jsonplaceholder API, I've selected the last 10</p>

            <p>on <span>CREATE</span>  click, we have a modal form to create a post. the newly created post goes on the top of the list</p>

            <p>if we want to <span>UPDATE</span> or <span>DELETE</span> a post, well we click on one from the list. because of the API, we can do this actions only for the post with ID less then 100</p>

            <p>finaly, the button <span>RESET...</span> it clears the localStorage object and we can start from the scratch! 💦</p>

            <p>Thank you.</p>
        </div>
    )
}

export default About;