import FormControlLabel from '@mui/material/FormControlLabel';
import { FC } from 'react';
import { MaterialUISwitch } from './CalendarView.styled';

const CalendarView: FC = () => {
  const isChecked = true;
  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={isChecked} />}
      label="Table/Calendar view"
    />
  );
};

export default CalendarView;
