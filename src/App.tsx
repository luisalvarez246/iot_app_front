import React from 'react';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import AppRouter from './router/AppRouter';
import TopBar from './components/TopBar';

const App = () => 
{
  return (
    <>
		<TopBar />
		<AppRouter />
	</>
  );
}

export default App;
