import { StyledButton, Prime, Primary, Secondary, Disabled } from './Button.styles';

type Props = {
  type?: string;
  text: string;
  callback?: () => void;
};

const Button: React.FC<Props> = ({ type, text, callback }) => {
  let buttonType = Prime;

  switch (type) {
    case 'prime':
      buttonType = Prime;
      break;
    case 'primary':
      buttonType = Primary;
      break;
    case 'secondary':
      buttonType = Secondary;
      break;
    case 'disabled':
      buttonType = Disabled;
      break;
    default:
      buttonType = Prime;
      break;
  }

  return (
    <StyledButton as={buttonType} onClick={callback}>
      {text}
    </StyledButton>
  );
};

export default Button;
