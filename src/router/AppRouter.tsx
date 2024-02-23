import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Devices from '../components/Devices';

const AppRouter = () =>
{
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/devices" element={<Devices />} />
		</Routes>
	)
}

export default AppRouter;
