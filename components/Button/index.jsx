import Button from "react-bootstrap/Button";
import TextButton from "./textButton";

const ButtonWrapper = (props) => {
  const { variant = "secondary", icon, label, children, onClick } = props;
  if (variant.startsWith("text-")) {
    const type = variant.split("-")[1];
    return (
      <TextButton onClick={onClick} type={type} icon={icon}>
        {children || label}
      </TextButton>
    );
  }
  const buttonProps = { ...props };
  delete buttonProps.icon;
  return (
    <Button {...buttonProps}>
      {label}
      {icon}
    </Button>
  );
};

export default ButtonWrapper;

export { TextButton };
