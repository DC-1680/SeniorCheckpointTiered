import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<nav>
				Welcome!
				<div>
					<NavLink to='/campuses'>Campus</NavLink>
					<NavLink to='/students'>Students</NavLink>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
