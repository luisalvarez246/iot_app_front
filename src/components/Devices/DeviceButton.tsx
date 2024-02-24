import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { SettingsOutlined } from '@mui/icons-material';
import { DeviceActions, AddDevice } from '../../interfaces/DeviceInterfaces';
import DeviceDrawer from './DeviceDrawer';

const	DeviceButton = ({ add }: { add: AddDevice }) =>
{
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const open = Boolean(anchorEl);
	const availableActions: DeviceActions[] = ['add', 'modify', 'delete'];
	
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => 
	{
    	setAnchorEl(event.currentTarget);
	};
	
	const handleClose = () => 
	{
	  setAnchorEl(null);
	};

	const handleAction = (action: string) =>
	{
		switch (action) 
		{
			case 'add':
				setIsDrawerOpen(true);
				break;
			default:
				break;
		}
		handleClose();
	}

	return (
		<>
			<Button 
				variant='contained' 
				startIcon={<SettingsOutlined />}
				id="action-button"
        		aria-controls={open ? 'action-menu' : undefined}
        		aria-haspopup="true"
        		aria-expanded={open ? 'true' : undefined}
        		onClick={handleClick}
			>
				Actions
			</Button>
			<Menu
        		id="action-menu"
        		anchorEl={anchorEl}
        		open={open}
        		onClose={handleClose}
        		MenuListProps={{
        		  'aria-labelledby': 'action-button',
        		}}
      		>
				{availableActions.map((action) => (
					<MenuItem key={action} onClick={() => handleAction(action)}>
						{action}
					</MenuItem>
				))}		
        	</Menu>
			<DeviceDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} add={add} />
		</>
	)
}

export default DeviceButton;