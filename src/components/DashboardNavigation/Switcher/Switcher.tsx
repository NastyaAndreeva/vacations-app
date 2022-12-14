import { FC } from 'react';
import { SwitcherContainer, SwitcherButton } from './Switcher.styled';

interface SwitcherProps {
  isActual: boolean;
  setIsActual: React.Dispatch<React.SetStateAction<boolean>>;
}

const Switcher: FC<SwitcherProps> = ({ isActual, setIsActual }) => {
  return (
    <SwitcherContainer>
      <SwitcherButton
        style={{ backgroundColor: isActual ? 'lightgreen' : 'lightgray' }}
        onClick={() => setIsActual(true)}
      >
        Actual
      </SwitcherButton>
      <SwitcherButton
        style={{ backgroundColor: !isActual ? 'lightgreen' : 'lightgray' }}
        onClick={() => setIsActual(false)}
      >
        History
      </SwitcherButton>
    </SwitcherContainer>
  );
};

export default Switcher;
