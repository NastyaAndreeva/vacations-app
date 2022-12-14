import { FC } from 'react';
import { useNavigate } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EditButton } from './DashboardTable.styled';

interface Vacation {
  id: string;
  vacationType: string;
  startDate: string;
  endDate: string;
  note: string;
}

interface DashboardTableProps {
  isActual: boolean;
  vacations: Vacation[];
}

const DashboardTable: FC<DashboardTableProps> = ({ vacations }) => {
  console.log('vacations: ', vacations);
  const navigate = useNavigate();
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
          {vacations.map(({ id, vacationType, startDate, endDate, note }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell align="center">{vacationType}</TableCell>
              <TableCell align="center">{startDate}</TableCell>
              <TableCell align="center">{endDate}</TableCell>
              <TableCell align="center">{note}</TableCell>
              <TableCell align="center">
                <EditButton
                  id={id}
                  onClick={() => {
                    navigate('/edit');
                  }}
                >
                  Edit
                </EditButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashboardTable;
