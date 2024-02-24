import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Device, DeviceKeys, DeviceTableProps } from "../../interfaces/DeviceInterfaces";
import DeviceDetails from './DeviceDetails';


const	DeviceTable = ({ devices }: DeviceTableProps) =>
{
	const [details, setDetails] = useState<Device>();
	const [isDetailsOpen, setIsDetailsOpen] = useState(false);
	const headers: DeviceKeys[] = ['id', 'name', 'lastConnection', 'mobileNumber'];

	const handleDetails = (device: Device) =>
	{
		setDetails(device);
		setIsDetailsOpen(true);
	}
	
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
		'&:last-child td, &:last-child th': {
		  border: 0,
		},
	  }));	  
	  
	return (
		<>
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
      			      <StyledTableRow 
					  	key={device.id} 
						onClick={() => handleDetails(device)}
						sx={{ '&:hover': {cursor: 'pointer'} }}
					  >
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
			{details && <DeviceDetails open={isDetailsOpen} setOpen={setIsDetailsOpen} details={details}/>}
		</>
	)
}

export default DeviceTable;