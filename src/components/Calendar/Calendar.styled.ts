import styled from '@emotion/styled';

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: #404040;
`;

export const CellWrapper = styled.div`
  padding: 10px;
  width: 182px;
  height: 80px;
  color: #dddcdd;
`;

export const RowInCell = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DayInCell = styled.div`
  height: 33px;
  width: 33px;
  align-items: center;
  justify-content: center;
`;
