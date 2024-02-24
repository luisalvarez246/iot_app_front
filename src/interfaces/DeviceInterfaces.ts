export interface Device
{
	id: string,
	name: string,
	mobileNumber: string,
	lastConnection: Date,
	latitude: number,
	longitude: number
}

export type NewDevice = Omit<Device, 'id'>;

export type DeviceKeys = keyof Device;