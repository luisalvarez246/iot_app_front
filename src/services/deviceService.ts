import { gql } from '@apollo/client';
import apolloClient from '../apolloClient';
import { NewDevice } from '../interfaces/DeviceInterfaces';

const GET_ALL_DEVICES = gql`
  query GetAllDevices 
  {
    devices 
	{
      id
      name
      mobileNumber
      lastConnection
      latitude
      longitude
    }
  }`;

const CREATE_DEVICE = gql`
  mutation CreateDevice($createDeviceDto: CreateDeviceDto!) 
  {
    createDevice(createDeviceDto: $createDeviceDto) 
	{
      id
      name
      mobileNumber
      lastConnection
      latitude
      longitude
    }
  }`;

const getAllDevices = async () => 
{
	const { data } = await apolloClient.query(
	{
		query: GET_ALL_DEVICES,
	});

	return (data.devices);
};

const createDevice = async (object: NewDevice) => 
{
	const formattedObject = 
	{
	  ...object,
	  lastConnection: object.lastConnection.toISOString(),
	}
	const { data } = await apolloClient.mutate(
	{
		errorPolicy: 'all',
		mutation: CREATE_DEVICE,
		variables: { createDeviceDto: formattedObject },
	});
	return data.createDevice;
};

export default { getAllDevices, createDevice };
