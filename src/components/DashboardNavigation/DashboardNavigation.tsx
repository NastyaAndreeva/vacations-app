import { FC } from 'react';
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
}

const DashboardNavigation: FC<DashboardNavigationProps> = ({ isActual }) => {
  return (
    <NavigationContainer>
      <LeftSideNavigation>
        <Switcher isActual={isActual} />
        <AddNewButton to="/edit">
          <AiOutlinePlus />
          New Request
        </AddNewButton>
      </LeftSideNavigation>

      <CalendarView />
    </NavigationContainer>
  );
};

export default DashboardNavigation;
