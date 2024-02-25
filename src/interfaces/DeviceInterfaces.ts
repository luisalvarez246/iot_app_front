export interface Device
{
	id: string,
	name: string,
	mobileNumber: string,
	lastConnection: Date,
	latitude: number,
	longitude: number
}

export interface DeviceTableProps
{
	devices: Device[];
}

export interface MapComponentProps extends DeviceTableProps
{
	mapZoom: number;
	mapCenter: [number, number];
}

export interface DeviceDrawerProps 
{
    open: boolean;
    setOpen: (open: boolean) => void;
    add: AddDevice;
}

export interface DeviceDetailsProps 
{
    open: boolean;
    setOpen: (open: boolean) => void;
    details: Device;
}

export interface NewDeviceForm 
{
    name: string;
    mobileNumber: string;
}

export type NewDevice = Omit<Device, 'id'>;

export type DeviceKeys = keyof Device;

export type DeviceActions = 'add' | 'modify' | 'delete';

export type AddDevice = (object: NewDevice) => Promise<void>;

