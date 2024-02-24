import React, { useState } from 'react';
import { Drawer, TextField, Button } from '@mui/material';
import { NewDevice, NewDeviceForm, DeviceDrawerProps } from '../../interfaces/DeviceInterfaces';

const DeviceDrawer = ({ open, setOpen, add }: DeviceDrawerProps) => {
    const [newDeviceForm, setNewDeviceForm] = useState<NewDeviceForm>(
	{
        name: '',
        mobileNumber: ''
    });

    const handleClose = () => 
	{
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => 
	{
        const { name, value } = event.target;
        setNewDeviceForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => 
	{
        const { name, mobileNumber } = newDeviceForm;

        if (name && mobileNumber) 
		{
            const newDevice: NewDevice = 
			{
                name,
                mobileNumber,
                lastConnection: new Date(),
                latitude: 0,
                longitude: 0
            };
            add(newDevice);
            handleClose();
        } 
		else {
            alert('Please fill in all fields');
        }
    };

    return (
        <>
            <Drawer anchor="right" open={open} onClose={handleClose}>
                <div style={{ width: 250, padding: 20 }}>
                    <TextField
                        name="name"
                        label="Name"
                        variant="outlined"
                        fullWidth
						required
                        value={newDeviceForm.name}
                        onChange={handleChange}
                        style={{ marginBottom: 20 }}
                    />
                    <TextField
                        name="mobileNumber"
                        label="Mobile Number"
                        variant="outlined"
                        fullWidth
						required
                        value={newDeviceForm.mobileNumber}
                        onChange={handleChange}
                        style={{ marginBottom: 20 }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Add Device
                    </Button>
                </div>
            </Drawer>
        </>
    );
};

export default DeviceDrawer;
