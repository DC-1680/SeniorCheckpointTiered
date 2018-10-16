import axios from 'axios';

// ACTION CREATORS
const GET_CAMPUSES = 'GET_CAMPUSES'

const getCampuses = (campuses) => ({
	type: GET_CAMPUSES,
	campuses
})


export const fetchCampuses = () => async (dispatch) => {
	try {
		const { data } = await axios.get('/api/campuses');
		console.log(data)
		dispatch(getCampuses(data))
	} catch (err) {
		console.err(err)
	}
}
const initialState = {
	campuses: []
}


// REDUCER
const campusReducer = (state = initialState, action) => {

	switch (action.type) {
		case GET_CAMPUSES:
			return { ...state, campuses: action.campuses }
		default:
			return state
	}
}

export default campusReducer;
