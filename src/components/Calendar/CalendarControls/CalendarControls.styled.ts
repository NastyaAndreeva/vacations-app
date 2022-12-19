import styled from '@emotion/styled';

export const CalendarTitle = styled.h3`
  font-weight: 500;
  color: darkgoldenrod;
`;

export const ControlButtons = styled.div`
  display: flex;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ControlButton = styled.button`
  height: 30px;
  width: 95px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
  &:not(:last-child) {
    margin-right: 3px;
  }
`;
