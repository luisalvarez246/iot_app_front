import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import deviceService from '../services/deviceService';
import { Device, NewDevice, DeviceKeys } from "../interfaces/DeviceInterfaces";
import { type } from 'os';


const	DeviceTable = () =>
{
	const [devices, setDevices] = useState<Device[]>();
	const headers: DeviceKeys[] = ['id', 'name', 'lastConnection', 'mobileNumber'];

	const getDevices = async () =>
	{	
		try
		{
			let response = await deviceService.getAllDevices();
			setDevices(response);
			console.log(response);

		}
		catch (error)
		{
			console.log(error);
		}
	}

	useEffect(() =>
	{
		getDevices();
	}, [])

	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
		  backgroundColor: theme.palette.common.black,
		  color: theme.palette.common.white,
		},
		[`&.${tableCellClasses.body}`]: {
		  fontSize: 14,
		},
	  }));
	  
	  const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
		  backgroundColor: theme.palette.action.hover,
		},
		// hide last border
		'&:last-child td, &:last-child th': {
		  border: 0,
		},
	  }));	  
	  
	return (
		<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
			{headers.map((header, i) => (
				header !== 'id' ?
				<StyledTableCell align="right" key={i}>{header}</StyledTableCell>
				:
				<StyledTableCell align="left" key={i}>{header}</StyledTableCell>
			)
			)}
          </TableRow>
        </TableHead>
        <TableBody>
          {devices?.map((device) => (
            <StyledTableRow key={device.id}>
              <StyledTableCell component="th" scope="row">
                {device.id}
              </StyledTableCell>
              <StyledTableCell align="right">{device.name}</StyledTableCell>
              <StyledTableCell align="right">{device.lastConnection.toLocaleString()}</StyledTableCell>
              <StyledTableCell align="right">{device.mobileNumber}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
	)
}

export default DeviceTable;