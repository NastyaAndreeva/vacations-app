import { FC } from 'react';
import { nanoid } from 'nanoid';
import dayjs, { Dayjs } from 'dayjs';
import {
  CalendarGrid,
  CellWrapper,
  RowInCell,
  DayInCell,
} from './Calendar.styled';
import { Vacation } from 'interfaces';
import CalendarControls from './CalendarControls';
import { LOCALE_STORAGE_KEY } from 'constants/localeStorage';

interface Day {
  day: number;
  isWeekend: boolean;
  isToday: boolean;
  dayDayjs: Dayjs;
}

interface CalendarProps {
  calendarDays: Day[];
  setPayload: React.Dispatch<React.SetStateAction<number>>;
  currentYear: number;
  currentMonth: string;
}

const Calendar: FC<CalendarProps> = ({
  calendarDays,
  setPayload,
  currentYear,
  currentMonth,
}) => {
  const vacations = JSON.parse(
    localStorage.getItem(LOCALE_STORAGE_KEY) || '[]'
  );

  return (
    <div>
      <CalendarControls
        setPayload={setPayload}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
      <CalendarGrid>
        {calendarDays.map(({ day, isWeekend, isToday, dayDayjs }) => {
          const isVacation = vacations.some(
            (el: Vacation) =>
              dayDayjs.isAfter(dayjs(el.startDate)) &&
              dayDayjs.isBefore(dayjs(el.endDate))
          );

          const vacationId = vacations.filter(
            (el: Vacation) =>
              dayDayjs.isAfter(dayjs(el.startDate)) &&
              dayDayjs.isBefore(dayjs(el.endDate))
          )[0]?.id;

          return (
            <CellWrapper
              style={{
                backgroundColor: isWeekend ? '#272829' : '#1e1f21',
                background: isVacation ? '#07529c' : '#1e1f21',
              }}
              key={nanoid()}
            >
              <RowInCell to={vacationId ? `/edit/${vacationId}` : '/edit'}>
                <DayInCell style={{ color: isToday ? 'tomato' : 'white' }}>
                  {day}
                </DayInCell>
              </RowInCell>
            </CellWrapper>
          );
        })}
      </CalendarGrid>
    </div>
  );
};

export default Calendar;
