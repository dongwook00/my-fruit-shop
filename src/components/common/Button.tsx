type Props = {
  text: string;
  callback?: () => void;
};

const Button: React.FC<Props> = ({ text, callback }) => {
  return <button onClick={callback}>{text}</button>;
};

export default Button;
