import { createContext, useReducer, useEffect } from 'react';

import AppReducer from './AppReducer';


const initState = {
    posts: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
    createPost: (dataObj) => { },
    getPosts: (start, end) => { },
    getSinglePost: (id) => { },
    clearScreen: () => { },
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
    const [state, dispath] = useReducer(AppReducer, initState);

    /* set posts in localStorage */
    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(state.posts));
    }, [state.posts])

    /* create a single post with some additional fields from CreateModal form */
    const createPost = async (dataObj) => {
        try {
            const dbResult = await (await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataObj)
            })).json();

            if (!dbResult) {
                throw new Error();
            }

            dispath({
                type: 'CREATE_POST',
                payload: dbResult
            });


        } catch (err) {
            console.error(err);
        }
    }

    /* the last 10 only did't put a pagination...*/
    const getPosts = async () => {
        try {
            const dbResult = await (await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json();

            let res = dbResult.slice(-10);

            dispath({
                type: 'READ_POSTS',
                payload: res
            })

        } catch (err) {
            console.error(err);
        }
    };

    /* get a single post by its id */
    const getSinglePost = async (id) => {
        try {
            const dbResultSinglePost = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json();

            if (!dbResultSinglePost) {
                throw new Error();
            }
            return dbResultSinglePost;

        } catch (err) {
            console.error(err);
        }
    }

    /* clear localStorage and the loaded posts on the screen */
    const clearScreen = () => {
        dispath({
            type: 'CLEAR'
        })
    }

    return <GlobalContext.Provider value={{
        posts: state.posts,
        createPost,
        getPosts,
        getSinglePost,
        clearScreen
    }}>
        {children}
    </GlobalContext.Provider>
}