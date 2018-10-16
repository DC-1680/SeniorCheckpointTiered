import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CampusCard = (props) => {
	const campus = props.campus;

	return (
		<div key={campus.id} className="instance" >
			<img src={campus.imageUrl} alt="" className="instance-img" />
			<div className="instance_info">
				<NavLink to={`/campuses/${campus.id}`} campus={campus}>{campus.name}</NavLink>
			</div>
		</div >
	)
}

export default CampusCard;