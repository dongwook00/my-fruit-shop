type Props = {
  text: string;
};

const Title: React.FC<Props> = ({ text }) => {
  return <h3>{text}</h3>;
};

export default Title;
