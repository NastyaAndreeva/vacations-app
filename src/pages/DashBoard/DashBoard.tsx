import { useState, useEffect, FC } from 'react';
import { TOTAL_DAYS } from 'constants/index';
import DashboardTable from 'components/DashboardTable';
import Container from 'components/Container';
import DashboardNavigation from 'components/DashboardNavigation';
import Calendar from 'components/Calendar';
import getCalendarDays from 'helpers/getCalendarDays';

interface CalendarDay {
  day: number;
  isWeekend: boolean;
  isToday: boolean;
}

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

const DashBoard: FC<Vacations> = ({ vacations }) => {
  console.log('vacations: ', vacations);
  const [isActual, setIsActual] = useState(true);
  const [isTable, setIsTable] = useState(true);
  const [payload, setPayload] = useState(0);
  const [calendarDays, setCalendarDays] = useState<CalendarDay[]>([]);

  useEffect(() => {
    setCalendarDays(getCalendarDays(TOTAL_DAYS, payload).days);
  }, [payload]);

  return (
    <Container>
      <DashboardNavigation
        isActual={isActual}
        isTable={isTable}
        setIsActual={setIsActual}
        setIsTable={setIsTable}
      />
      {isTable ? (
        <DashboardTable isActual={isActual} vacations={vacations} />
      ) : (
        <Calendar
          calendarDays={calendarDays}
          setPayload={setPayload}
          currentYear={getCalendarDays(TOTAL_DAYS, payload).currentYear}
          currentMonth={getCalendarDays(TOTAL_DAYS, payload).currentMonth}
        />
      )}
    </Container>
  );
};

export default DashBoard;
