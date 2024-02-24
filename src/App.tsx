import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './router/AppRouter';
import TopBar from './components/TopBar';
import { Container } from '@mui/material';

const App = () => 
{
  return (
    <>
		<TopBar />
		<Container maxWidth="xl">
			<AppRouter />
		</Container>
	</>
  );
}

export default App;
