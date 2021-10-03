import { StyledTitle } from './Title.styles';

type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
