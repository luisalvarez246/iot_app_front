import { Toolbar } from '@mui/material';
import DeviceButton from './DeviceButton';
import { AddDevice } from '../../interfaces/DeviceInterfaces';

const	DeviceToolbar = ({ add }: { add: AddDevice }) =>
{
	return (
			<Toolbar sx={{ flexWrap: 'wrap' }}>
				<DeviceButton add={add}/>
			</Toolbar>
	)
}

export default DeviceToolbar;