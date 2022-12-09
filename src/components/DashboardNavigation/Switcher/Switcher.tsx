import { FC } from 'react';
import { SwitcherContainer, SwitcherButton } from './Switcher.styled';

interface SwitcherProps {
  isActual: boolean;
}

const Switcher: FC<SwitcherProps> = ({ isActual }) => {
  return (
    <SwitcherContainer>
      <SwitcherButton
        style={{ backgroundColor: isActual ? 'lightgreen' : 'lightgray' }}
      >
        Actual
      </SwitcherButton>
      <SwitcherButton
        style={{ backgroundColor: !isActual ? 'lightgreen' : 'lightgray' }}
      >
        History
      </SwitcherButton>
    </SwitcherContainer>
  );
};

export default Switcher;
