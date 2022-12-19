import { FC } from 'react';
import { nanoid } from 'nanoid';
import {
  CalendarGrid,
  CellWrapper,
  RowInCell,
  DayInCell,
} from './Calendar.styled';
import CalendarControls from './CalendarControls';

interface Day {
  day: number;
  isWeekend: boolean;
  isToday: boolean;
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
  return (
    <div>
      <CalendarControls
        setPayload={setPayload}
        currentYear={currentYear}
        currentMonth={currentMonth}
      />
      <CalendarGrid>
        {calendarDays.map(({ day, isWeekend, isToday }) => {
          return (
            <CellWrapper
              style={{ backgroundColor: isWeekend ? '#272829' : '#1e1f21' }}
              key={nanoid()}
            >
              <RowInCell>
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
