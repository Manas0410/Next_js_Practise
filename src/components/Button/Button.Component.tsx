interface IButtonProps {
  label: string;
  onClick: () => void;
}
const ButtonView = ({ label, onClick }: IButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ButtonView;
