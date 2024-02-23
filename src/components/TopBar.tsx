import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () =>
{
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/devices">Devices</Link>
		</nav>
	)
}

export default TopBar;