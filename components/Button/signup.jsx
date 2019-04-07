import Button from "react-bootstrap/Button";

const SignupButton = (props) => {
	const handleSignup = () => {
		console.log("currently under construction");
	};
	const { label, size } = props;
	return (
		<Button variant="important" onClick={handleSignup} size={size}>
			{label || "Sign up"}
		</Button>
	);
};

export default SignupButton;
