import { StyledButton, Primary, White } from './Button.styles';

type Props = {
  type: string;
  callback?: () => void;
};

const PrimeFilterButton: React.FC<Props> = ({ type, callback }) => {
  let buttonType = White;

  switch (type) {
    case 'primary':
      buttonType = Primary;
      break;
    case 'white':
      buttonType = White;
      break;
    default:
      buttonType = White;
      break;
  }
  return (
    <StyledButton as={buttonType} onClick={callback}>
      <span className="typography-prime">prime</span>
      <span> 과일</span>
    </StyledButton>
  );
};

export default PrimeFilterButton;
