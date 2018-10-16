// Write a component to display a list of all campuses (just their names and images)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/studentReducer'
// import StudentCard from './StudentCard'


class AllStudents extends Component {

	componentDidMount() {
		this.props.fetchStudents();
	}

	render() {
		console.log(this.props)
		const { students } = this.props;

		return (
			<div>
				{
					students.length <= 0
						? <h3>There are no campuses registered in the database.</h3>
						: students.map((student) => (
							<li key={student.firstName}>{student.firstName} {student.lastName}</li>
						))
				}
				<h1>Hello</h1>
			</div>

		)
	}

}

const mapState = (state) => {
	return {
		students: state.studentReducer.students
	}
}

const mapDispatch = dispatch => {
	return {
		fetchStudents: () => dispatch(fetchStudents())
	}
}

export default connect(mapState, mapDispatch)(AllStudents)
