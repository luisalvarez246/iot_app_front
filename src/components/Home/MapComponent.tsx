import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Device } from '../../interfaces/DeviceInterfaces';
import deviceService from '../../services/deviceService';
import DeviceDetails from '../Devices/DeviceDetails';

const MapComponent = () => 
{
	const [devices, setDevices] = useState<Device[]>([]);
	const [details, setDetails] = useState<Device>();
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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

	const handleDetails = (device: Device) =>
	{
		setDetails(device);
		setIsDetailsOpen(true);
	}

  return (
	<>
    	<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: "400px", width: "50%" }}>
  			<TileLayer
    			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  			/>
			{devices.map((device) =>(
				<Marker
					key={device.id} 
					position={[device.latitude, device.longitude]}
					eventHandlers={{ click: () => handleDetails(device) }}
				>
    				<Tooltip>
    				  {device.name} <br /> {device.id}
    				</Tooltip>
  				</Marker>
			))}
		</MapContainer>
		{details && <DeviceDetails open={isDetailsOpen} setOpen={setIsDetailsOpen} details={details} />}
	</>
  );
};

export default MapComponent;
