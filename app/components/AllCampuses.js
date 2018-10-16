// Write a component to display a list of all campuses (just their names and images)

import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusReducer'
import CampusCard from './CampusCard'


class AllCampuses extends Component {

	componentDidMount() {
		this.props.fetchCampuses();
	}

	render() {
		console.log(this.props)
		const { campuses } = this.props;

		return (
			<div>
				{
					campuses.length <= 0
						? <h3>There are no campuses registered in the database.</h3>
						: campuses.map((campus) => (
							<CampusCard campus={campus} />
						))
				}
			</div>

		)
	}

}

const mapState = (state) => {
	return {
		campuses: state.campusReducer.campuses
	}
}

const mapDispatch = dispatch => {
	return {
		fetchCampuses: () => dispatch(fetchCampuses())
	}
}

export default connect(mapState, mapDispatch)(AllCampuses)
