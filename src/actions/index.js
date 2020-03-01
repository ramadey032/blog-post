import jsonPlaceholder from '../services/JSONPlaceholder';

export const fetchPost = async () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POST', payload: response});
    };
