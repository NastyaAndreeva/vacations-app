import React, { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Switcher from './Switcher';
import CalendarView from 'components/DashboardNavigation/CalendarView';
import {
  NavigationContainer,
  AddNewButton,
  LeftSideNavigation,
} from './DashboardNavigation.styled';

interface DashboardNavigationProps {
  isActual: boolean;
  isTable: boolean;
  setIsActual: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTable: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardNavigation: FC<DashboardNavigationProps> = ({
  isActual,
  isTable,
  setIsActual,
  setIsTable,
}) => {
  return (
    <NavigationContainer>
      <LeftSideNavigation>
        <Switcher isActual={isActual} setIsActual={setIsActual} />
        <AddNewButton to="/edit">
          <AiOutlinePlus />
          New Request
        </AddNewButton>
      </LeftSideNavigation>

      <CalendarView isTable={isTable} setIsTable={setIsTable} />
    </NavigationContainer>
  );
};

export default DashboardNavigation;
