import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { DeviceDetailsProps } from '../../interfaces/DeviceInterfaces';

const Transition = React.forwardRef(
	function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeviceDetails = ({open, setOpen, details}: DeviceDetailsProps) =>
{
	const excludeKeys = ['name', '__typename'];

  const handleClose = () => 
  {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {details.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
	  		{Object.entries(details).map(([key, value], index, array) => (
				<ListItemButton key={key}>
					{!excludeKeys.includes(key) && <ListItemText primary={value.toLocaleString()} secondary={key} />}
					{index !== array.length - 1 && <Divider />}
				</ListItemButton>
			))}
        </List>
      </Dialog>
    </React.Fragment>
  );
}

export default DeviceDetails;