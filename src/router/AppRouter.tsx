import { Route, Routes } from 'react-router-dom';
import Home from '../views/HomeView';
import DeviceView from '../views/DevicesView';

const AppRouter = () =>
{
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/devices" element={<DeviceView />} />
		</Routes>
	)
}

export default AppRouter;
