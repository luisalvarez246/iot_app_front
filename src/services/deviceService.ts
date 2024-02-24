import axios from 'axios';
import { Device, NewDevice } from "../interfaces/DeviceInterfaces";

const baseUrl = 'http://localhost:3001/devices'

const getAllDevices = async () => 
{
	const	response = await axios.get<Device[]>(baseUrl);

	return (response.data);
}

const createDevice = async (object: NewDevice) => 
{
	const	response = await axios.post<Device>(baseUrl, object);

	return (response.data);
}

export default { getAllDevices, createDevice } 