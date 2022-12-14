import { FC } from 'react';
import {
  CalendarTitle,
  ControlButtons,
  ControlsWrapper,
  ControlButton,
} from './CalendarControls.styled';

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
        <ControlButton onClick={() => setPayload(s => s - 42)}>
          Previous
        </ControlButton>
        <ControlButton onClick={() => setPayload(0)}>Current</ControlButton>
        <ControlButton onClick={() => setPayload(s => s + 42)}>
          Following
        </ControlButton>
      </ControlButtons>
    </ControlsWrapper>
  );
};

export default CalendarControls;
