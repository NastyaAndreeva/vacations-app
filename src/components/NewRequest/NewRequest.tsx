import { FC, useState } from 'react';
import days, { Dayjs } from 'dayjs';
import { useLocation, useParams } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import {
  NewRequestFormStyled,
  Input,
  Label,
  ErrorMessage,
  InputContainer,
  Button,
  NewRequestContainer,
  NotesInput,
  NotesInputContainer,
} from './NewRequest.styled';
import { LOCALE_STORAGE_KEY } from 'constants/localeStorage';
import { Vacation } from 'interfaces';
import { getVacations } from 'helpers';

interface NewRequestProps {
  isEdit: boolean;
  vacation: Vacation;
}

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

const NewRequest: FC<NewRequestProps> = ({ isEdit, vacation }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vacations] = useState(getVacations());

  let initialValues: NewRequestFormValues = {
    vacationType: isEdit ? vacation?.vacationType : '',
    startDate: isEdit ? days(vacation?.startDate) : days(),
    endDate: isEdit ? days(vacation?.endDate) : days(),
    note: isEdit ? vacation?.note : '',
  };

  const handleSubmit = (values: NewRequestFormValues) => {
    const vacation = {
      id: isEdit ? id : vacations.length + 1,
      vacationType: values.vacationType,
      startDate: values.startDate.format('YYYY-MM-DD'),
      endDate: values.endDate.format('YYYY-MM-DD'),
      note: values.note,
    };

    if (isEdit) {
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
                <Input
                  id="vacationType"
                  name="vacationType"
                  placeholder="Vacation type"
                />
                {errors.vacationType && touched.vacationType ? (
                  <ErrorMessage>{errors.vacationType}</ErrorMessage>
                ) : null}
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
