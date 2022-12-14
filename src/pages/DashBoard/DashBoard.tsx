import { useState } from 'react';
import DashboardTable from 'components/DashboardTable';
import Container from 'components/Container';
import DashboardNavigation from 'components/DashboardNavigation';

const DashBoard = () => {
  const [isActual, setIsActual] = useState(true);
  const [isTable, setIsTable] = useState(true);

  return (
    <Container>
      <DashboardNavigation
        isActual={isActual}
        isTable={isTable}
        setIsActual={setIsActual}
        setIsTable={setIsTable}
      />
      {isTable ? <DashboardTable isActual={isActual} /> : <div>Calendar</div>}
    </Container>
  );
};

export default DashBoard;
