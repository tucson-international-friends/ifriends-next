import { Button } from "react-bootstrap";
import TextButton from "./textButton";

export default (props) => {
	const { variant, children } = props;
	if (variant.startsWith("text-")) {
		const type = variant.split("-")[1];
		return <TextButton type={type}>{children}</TextButton>;
	}
	return <Button {...props} />;
};

export { TextButton };
