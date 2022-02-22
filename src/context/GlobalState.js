import { createContext, useReducer, useEffect } from 'react';

import AppReducer from './AppReducer';


const initState = {
    posts: localStorage.getItem('posts') ? JSON.parse(localStorage.getItem('posts')) : [],
    createPost: (dataObj) => { },
    readPost: (start, end) => { },
    clearScreen: () => { }
}

export const GlobalContext = createContext(initState);

export const GlobalProvider = ({ children }) => {
    const [state, dispath] = useReducer(AppReducer, initState);

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(state.posts));
    }, [state.posts])

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

    const readPost = async () => {
        try {
            const dbResult = await (await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json();

            let test = dbResult.slice(-10);

            console.log(test, 'get global state function');

            dispath({
                type: 'READ_POSTS',
                payload: test
            })

        } catch (err) {
            console.error(err);
        }
    };

    const clearScreen = () => {
        dispath({
            type: 'CLEAR'
        })
    }

    return <GlobalContext.Provider value={{
        posts: state.posts,
        createPost,
        readPost,
        clearScreen
    }}>
        {children}
    </GlobalContext.Provider>
}