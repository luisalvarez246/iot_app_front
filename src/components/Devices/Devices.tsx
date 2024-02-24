import React, { useEffect, useState } from 'react'
import deviceService from '../../services/deviceService';
import DeviceToolbar from './DeviceToolbar';
import DeviceTable from './DeviceTable';
import { Device, NewDevice } from '../../interfaces/DeviceInterfaces';

const	Devices = () =>
{
	const [devices, setDevices] = useState<Device[]>([]);

	const getDevices = async () =>
	{	
		try
		{
			let response = await deviceService.getAllDevices();
			setDevices(response);
			console.log(response);

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
			<DeviceToolbar add={addDevice}/>
			<DeviceTable devices={devices} />
		</>
	)
}

export default Devices;