import { FC } from 'react';
import TextField from '@mui/material/TextField';

interface NativePickersFnProps {
  name: string;
}

const DatePicker: FC<NativePickersFnProps> = ({ name }) => {
  return (
    <TextField
      id="date"
      type="date"
      name={name}
      defaultValue="2022-12-14"
      sx={{ width: 220 }}
    />
  );
};

export default DatePicker;
