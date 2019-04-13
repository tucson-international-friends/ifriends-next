import Button from "react-bootstrap/Button";
import Signup from "./signup";
import TextButton from "./textButton";

export default (props) => {
	const { variant, icon, label, children } = props;
	if (variant.startsWith("text-")) {
		const type = variant.split("-")[1];
		return <TextButton type={type} icon={icon}>{children || label}</TextButton>;
	}
	const buttonProps = { ...props };
	delete buttonProps.icon;
	return <Button {...buttonProps}>{label}{icon}</Button>;
};

export { TextButton, Signup };
