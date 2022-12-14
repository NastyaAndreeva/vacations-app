import { FC } from 'react';
import Container from 'components/Container';
import NewRequest from 'components/NewRequest';

interface Vacation {
  id: string;
  vacationType: string;
  startDate: string;
  endDate: string;
  note: string;
}

interface Vacations {
  vacations: Vacation[];
}

const AddEdit: FC<Vacations> = ({ vacations }) => {
  return (
    <Container>
      <NewRequest vacations={vacations} />
    </Container>
  );
};

export default AddEdit;
