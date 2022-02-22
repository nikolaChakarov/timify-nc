const AppReducer = (state, action) => {

    switch (action.type) {
        case 'CREATE_POST':
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };

        case 'READ_POSTS':
            return {
                ...state,
                posts: [...action.payload]
            };

        case 'CLEAR':
            return {
                ...state,
                posts: []
            };

        default:
            return state;
    }

}

export default AppReducer;