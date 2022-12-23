import { useState, useEffect } from 'react';
import days, { Dayjs } from 'dayjs';
import { useParams } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {
  NewRequestFormStyled,
  Label,
  ErrorMessage,
  InputContainer,
  Button,
  NewRequestContainer,
  NotesInput,
  NotesInputContainer,
} from './NewRequest.styled';
import { getVacations } from 'helpers';
import { Vacation } from 'interfaces';
import { LOCALE_STORAGE_KEY } from 'constants/localeStorage';

const vacationTypes = [
  'Annual leave',
  'Family and medical leave',
  'Parental leave',
  'Sick leave',
  'Unpaid leave',
  'Study leave',
];

const NewRequestSchema = Yup.object().shape({
  vacationType: Yup.string().required('Required'),
  startDate: Yup.string().required('Required'),
  endDate: Yup.string().required('Required'),
  note: Yup.string(),
});

interface NewRequestFormValues {
  vacationType: string;
  startDate: Dayjs;
  endDate: Dayjs;
  note: string;
}

const NewRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vacationType, setVacationType] = useState('Annual leave');
  const [vacations, setVacations] = useState<Vacation[]>([]);

  useEffect(() => {
    setVacations(getVacations());
  }, []);

  const vacation: Vacation | undefined = vacations.find(
    (el: Vacation) => String(el.id) === id
  );

  let initialValues: NewRequestFormValues = {
    vacationType: vacationType,
    startDate: id ? days(vacation?.startDate) : days(),
    endDate: id ? days(vacation?.endDate) : days(),
    note: id ? vacation?.note || '' : '',
  };

  const handleChange = (event: SelectChangeEvent) => {
    setVacationType(event.target.value as string);
  };

  const handleSubmit = (values: NewRequestFormValues) => {
    const vacation = {
      id: id ? String(id) : String(vacations.length + 1),
      vacationType: vacationType,
      startDate: values.startDate.format('YYYY-MM-DD'),
      endDate: values.endDate.format('YYYY-MM-DD'),
      note: values.note,
    };

    if (id) {
      vacations.splice(Number(id) - 1, 1, vacation);
    } else {
      vacations.push(vacation);
    }

    localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(vacations));
    navigate('/');
  };

  return (
    <Formik
      validationSchema={NewRequestSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <NewRequestFormStyled>
          <NewRequestContainer>
            <div>
              <InputContainer>
                <Label htmlFor="vacationType">Vacation type</Label>
                <Select
                  id="vacationType"
                  onChange={handleChange}
                  name="vacationType"
                  value={vacationType}
                  placeholder="Vacation type"
                >
                  {vacationTypes.map(vacationType => (
                    <MenuItem value={vacationType} key={vacationType}>
                      {vacationType}
                    </MenuItem>
                  ))}
                </Select>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="startDate">Start date</Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={(value: string | null) =>
                      setFieldValue('startDate', value, true)
                    }
                    value={values.startDate}
                    renderInput={(params: {}) => (
                      <TextField
                        error={Boolean(touched.startDate && errors.startDate)}
                        label="Birthday"
                        margin="normal"
                        name="birthday"
                        variant="standard"
                        fullWidth
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </InputContainer>
              <InputContainer>
                <Label htmlFor="endDate">End date</Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    onChange={(value: string | null) =>
                      setFieldValue('endDate', value, true)
                    }
                    value={values.endDate}
                    renderInput={(params: {}) => (
                      <TextField
                        error={Boolean(touched.endDate && errors.endDate)}
                        margin="normal"
                        variant="standard"
                        fullWidth
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              </InputContainer>
            </div>
            <NotesInputContainer>
              <Label htmlFor="note">Notes</Label>
              <NotesInput id="note" name="note" placeholder="Note" />
              {errors.note && touched.note ? (
                <ErrorMessage>{errors.note}</ErrorMessage>
              ) : null}
            </NotesInputContainer>
          </NewRequestContainer>
          <Button type="submit">Save</Button>
        </NewRequestFormStyled>
      )}
    </Formik>
  );
};

export default NewRequest;
