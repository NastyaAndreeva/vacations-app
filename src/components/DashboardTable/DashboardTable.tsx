import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditButton } from './DashboardTable.styled';

interface DashboardTableProps {
  isActual: boolean;
}

function createData(
  abscenceId: string,
  type: string,
  startDate: string,
  endDate: string,
  notes: string
) {
  return { abscenceId, type, startDate, endDate, notes };
}

const rows = [
  createData('1', 'regular', '03/12/2022', '17/12/2022', 'regular'),
];

const DashboardTable: FC<DashboardTableProps> = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Abscence ID</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Start date</TableCell>
            <TableCell align="center">End date</TableCell>
            <TableCell align="center">Notes</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ abscenceId, type, startDate, endDate, notes }) => (
            <TableRow key={abscenceId}>
              <TableCell component="th" scope="row">
                {abscenceId}
              </TableCell>
              <TableCell align="center">{type}</TableCell>
              <TableCell align="center">{startDate}</TableCell>
              <TableCell align="center">{endDate}</TableCell>
              <TableCell align="center">{notes}</TableCell>
              <TableCell align="center">
                <EditButton to="/edit">Edit</EditButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
