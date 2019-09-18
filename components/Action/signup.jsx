import { useGlobal } from "reactn";
import Button from "../Button";

const Signup = ({ label = "Sign Up", size }) => {
	const [user] = useGlobal("user");
	const handleSignup = () => {
		window.open("https://forms.gle/5t7WxJZydsZJJKRX6", "_blank");
	};
	return user
		? <Button variant="important" size={size} label="Get Started" />
		: (
			<Button variant="important" onClick={handleSignup} size={size} label={label} />
		);
};

export default Signup;
