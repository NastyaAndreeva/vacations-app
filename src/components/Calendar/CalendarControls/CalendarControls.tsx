import { FC } from 'react';
import {
  CalendarTitle,
  ControlButtons,
  ControlsWrapper,
  ControlButton,
} from './CalendarControls.styled';
import { TOTAL_DAYS } from 'constants/totalDays';

interface CalendarControlsProps {
  setPayload: React.Dispatch<React.SetStateAction<number>>;
  currentYear: number;
  currentMonth: string;
}

const CalendarControls: FC<CalendarControlsProps> = ({
  setPayload,
  currentYear,
  currentMonth,
}) => {
  return (
    <ControlsWrapper>
      <CalendarTitle>
        {currentMonth} {currentYear}
      </CalendarTitle>
      <ControlButtons>
        <ControlButton onClick={() => setPayload(s => s - TOTAL_DAYS)}>
          Previous
        </ControlButton>
        <ControlButton onClick={() => setPayload(0)}>Current</ControlButton>
        <ControlButton onClick={() => setPayload(s => s + TOTAL_DAYS)}>
          Following
        </ControlButton>
      </ControlButtons>
    </ControlsWrapper>
  );
};

export default CalendarControls;
