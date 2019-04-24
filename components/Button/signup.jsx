import Button from "react-bootstrap/Button";

const SignupButton = (props) => {
	const handleSignup = () => {
		window.open("https://forms.gle/5t7WxJZydsZJJKRX6", "_blank");
	};
	const { label, size } = props;
	return (
		<Button variant="important" onClick={handleSignup} size={size}>
			{label || "Sign up"}
		</Button>
	);
};

export default SignupButton;
