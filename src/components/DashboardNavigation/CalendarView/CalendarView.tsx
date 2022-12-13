import FormControlLabel from '@mui/material/FormControlLabel';
import { FC } from 'react';
import { MaterialUISwitch } from './CalendarView.styled';

interface CalendarViewProps {
  isTable: boolean;
  setIsTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarView: FC<CalendarViewProps> = ({ isTable, setIsTable }) => {
  return (
    <FormControlLabel
      control={
        <MaterialUISwitch sx={{ m: 1 }} checked={isTable} value={isTable} />
      }
      label="Table/Calendar view"
      onClick={() => setIsTable(!isTable)}
    />
  );
};

export default CalendarView;
