import { FC } from 'react';
import Container from 'components/Container';
import NewRequest from 'components/NewRequest';

interface Vacation {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  note: string;
}

interface Vacations {
  vacations: Vacation[];
}

const AddEdit: FC<Vacations> = () => {
  return (
    <Container>
      <NewRequest />
    </Container>
  );
};

export default AddEdit;
