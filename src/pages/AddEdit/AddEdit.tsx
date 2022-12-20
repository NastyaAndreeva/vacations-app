import { FC } from 'react';
import Container from 'components/Container';
import NewRequest from 'components/NewRequest';
import { useParams } from 'react-router-dom';
import { getVacations } from 'helpers';
import { Vacation } from 'interfaces';

interface AddEditProps {
  isEdit: boolean;
}

const AddEdit: FC<AddEditProps> = ({ isEdit }) => {
  const { id } = useParams();
  const vacations = getVacations();
  const vacation: Vacation = vacations.find(
    (el: Vacation) => String(el.id) === id
  );

  return (
    <Container>
      <NewRequest isEdit={isEdit} vacation={vacation} />
    </Container>
  );
};

export default AddEdit;
