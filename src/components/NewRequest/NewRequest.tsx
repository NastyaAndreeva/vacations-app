import { FC } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { useNavigate } from 'react-router-dom';
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

const NewRequestSchema = Yup.object().shape({
  vacationType: Yup.string().required('Required'),
  startDate: Yup.string().required('Required'),
  endDate: Yup.string().required('Required'),
  note: Yup.string(),
});

interface NewRequestFormValues {
  vacationType: string;
  startDate: string;
  endDate: string;
  note: string;
}

const NewRequest: FC = () => {
  //   const navigate = useNavigate();

  const initialValues: NewRequestFormValues = {
    vacationType: '',
    startDate: '',
    endDate: '',
    note: '',
  };

  const handleSubmit = (values: NewRequestFormValues) => {
    const vacation = {
      vacationType: values.vacationType,
      startDate: values.startDate,
      endDate: values.endDate,
      note: values.note,
    };
    console.log('vacation: ', vacation);

    // navigate('/');
  };

  return (
    <Formik
      validationSchema={NewRequestSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
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
                <Input
                  id="startDate"
                  name="startDate"
                  placeholder="Start date"
                />
                {errors.startDate && touched.startDate ? (
                  <ErrorMessage>{errors.startDate}</ErrorMessage>
                ) : null}
              </InputContainer>
              <InputContainer>
                <Label htmlFor="endDate">End date</Label>
                <Input id="endDate" name="endDate" placeholder="End date" />
                {errors.endDate && touched.endDate ? (
                  <ErrorMessage>{errors.endDate}</ErrorMessage>
                ) : null}
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
