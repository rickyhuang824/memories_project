import * as api from '../api';

//action creator
export const getPosts = () => async (dispatch) =>{
	try {
		const { data } = await api.fetchPosts();
		dispatch({ type:'FETCH_ALL', payload: data })
	} catch (error) {
		console.log(error);
	}
};

export const createPost = (newPost) => async (dispatch) => {
	try {
		const { data } = await api.createPost(newPost);
		const action = {type: 'CREATE_POST', payload: data}

		dispatch(action)
	} catch (error) {
		console.log(error);
	}
}