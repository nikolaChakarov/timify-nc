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

        case 'UPDATE_POST':

            return {
                ...state,
                posts: [...state.posts.map(el => el.id === action.payload.id ? action.payload : el)]
            };

        case 'DELETE_POST':
            console.log(action.payload, 'reducer');
            return {
                ...state,
                posts: [...state.posts.filter(el => el.id != action.payload)]
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