import { Route, Routes } from 'react-router-dom';
import HomeView from '../views/HomeView';
import DeviceView from '../views/DevicesView';

const AppRouter = () =>
{
	return (
		<Routes>
			<Route path="/" element={<HomeView />} />
			<Route path="/devices" element={<DeviceView />} />
		</Routes>
	)
}

export default AppRouter;
