import MapComponent from "./MapComponent";
import { Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Device } from "../../interfaces/DeviceInterfaces";
import deviceService from "../../services/deviceService";

const Home = () =>
{
	const [devices, setDevices] = useState<Device[]>([]);
	const homeHeader = 'Welcome to IOT App';
	const mapZoom = 1;
	const mapCenter: [number, number] = [0, 0];

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

	return(
		<>
			<Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Typography variant="h2" component="h3" sx={{ m: 2 }}>{homeHeader}</Typography>
				{devices && <MapComponent devices={devices} mapZoom={mapZoom} mapCenter={mapCenter}/>}
			</Container>
		</>
	)
}

export default Home;