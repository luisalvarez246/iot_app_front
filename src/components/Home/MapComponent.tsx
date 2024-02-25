import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Device, MapComponentProps } from '../../interfaces/DeviceInterfaces';
import DeviceDetails from '../Devices/DeviceDetails';
import MarkerClusterGroup from './MarkerClusterGroup';

const MapComponent = ({ devices, mapZoom, mapCenter }: MapComponentProps) => 
{
	const [details, setDetails] = useState<Device>();
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);

	const handleDetails = (device: Device) =>
	{
		setDetails(device);
		setIsDetailsOpen(true);
	}

  return (
	<>
    	<MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false} style={{ height: "400px", width: "50%" }}>
  			<TileLayer
    			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  			/>
			<MarkerClusterGroup>
				{devices.map((device) =>(
					<Marker
						key={device.id}
						title={device.id}
						alt={device.name}
						position={[device.latitude, device.longitude]}
						eventHandlers={{ click: () => handleDetails(device) }}
					>
  					</Marker>
				))}
			</MarkerClusterGroup>
		</MapContainer>
		{details && <DeviceDetails open={isDetailsOpen} setOpen={setIsDetailsOpen} details={details} />}
	</>
  );
};

export default MapComponent;
