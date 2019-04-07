import Button from "react-bootstrap/Button";
import TextButton from "./textButton";
import Signup from "./signup";

export default (props) => {
	const { variant, icon, label, children } = props;
	console.log(icon);
	if (variant.startsWith("text-")) {
		const type = variant.split("-")[1];
		return <TextButton type={type} icon={icon}>{children || label}</TextButton>;
	}
	const buttonProps = { ...props };
	delete buttonProps.icon;
	return <Button {...buttonProps}>{label}{icon}</Button>;
};

export { TextButton, Signup };
