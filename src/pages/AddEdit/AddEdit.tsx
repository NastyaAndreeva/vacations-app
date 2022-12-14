import { FC } from 'react';

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
  return <div>Add and edit</div>;
};

export default AddEdit;
