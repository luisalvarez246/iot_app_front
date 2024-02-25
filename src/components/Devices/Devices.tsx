import React, { useEffect, useState } from 'react'
import deviceService from '../../services/deviceService';
import DeviceToolbar from './DeviceToolbar';
import DeviceTable from './DeviceTable';
import { Device, NewDevice } from '../../interfaces/DeviceInterfaces';
import { Typography } from '@mui/material';

const	Devices = () =>
{
	const [devices, setDevices] = useState<Device[]>([]);
	const deviceHeader = 'Devices';

	const getDevices = async () =>
	{	
		try
		{
			let response = await deviceService.getAllDevices();
			setDevices(response);
		}
		catch (error)
		{
			console.log(error);
		}
	}

	useEffect(() =>
	{
		getDevices();
	}, [])

	const addDevice = async (newDevice: NewDevice) =>
	{
		try
		{
			let	response = await deviceService.createDevice(newDevice);
			setDevices([...devices, response]);
		}
		catch (error)
		{
			console.log(error);
		}
	}

	return (
		<>
			<Typography variant="h2" component="h3" textAlign="center">{deviceHeader}</Typography>
			<DeviceToolbar add={addDevice}/>
			<DeviceTable devices={devices} />
		</>
	)
}

export default Devices;