import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Box, Button, Toolbar, Typography, Avatar } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const TopBar = () =>
{
	const destinations =
	[
		{
			page: 'Home',
			route: '/'
		},
		{
			page: 'Devices',
			route: '/devices'
		}
	];
	const placeHolder = 'Enterprise';

	return (
		<>
			<AppBar position="static" sx={{ bgcolor:'white' }}>
				<Box sx={{ 
					bgcolor: 'black', 
					height: 20, 
					px:6,
					display: 'flex', 
					justifyContent: 'flex-end'}}
				>
					<Typography variant="caption">{placeHolder}</Typography>
				</Box>
				<Container maxWidth="xl">
					<Toolbar sx={{ flexWrap: 'wrap' }}>
						<Box sx={{ flexGrow: 0.01 }}>
							<Avatar alt="site_logo" src="./site_logo.png"></Avatar>
						</Box>
						<Box sx={{ flexGrow: 1, flexWrap: 'wrap', display: 'flex' }}>
            				{destinations.map((destination, i) => (
            				  <Button
            				    key={i}
            				    sx={{ my: 2, color: 'black', display: 'block' }}
            				  >
								<Typography 
									component={Link} 
									to={destination.route} 
									sx={{ textDecoration: 'none', textTransform: 'none', color: 'inherit' }}
								>
									{destination.page}
								</Typography>
            				  </Button>
            				))}
          				</Box>
						<AccountCircle sx={{ color: 'black' }}/>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	)
}

export default TopBar;