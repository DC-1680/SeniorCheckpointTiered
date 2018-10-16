import axios from 'axios';

// ACTION CREATORS
const GET_STUDENTS = 'GET_STUDENTS'

const getStudents = (students) => ({
	type: GET_STUDENTS,
	students
})


export const fetchStudents = () => async (dispatch) => {
	try {
		const { data } = await axios.get('/api/students');
		dispatch(getStudents(data))
	} catch (err) {
		console.err(err)
	}
}
const initialState = {
	students: []
}


// REDUCER
const studentReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_STUDENTS:
			return { ...state, students: action.students }
		default:
			return state
	}
}

export default studentReducer;
