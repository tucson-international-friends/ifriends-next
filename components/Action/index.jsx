import Link from "next/link";
import Button from "../Button";
import Login from "./login";
import Profile from "./profile";
import Signup from "./signup";

export const ACTIONS = {
	SIGNUP: "signup",
	READMORE: "readmore",
	LOGIN: "login",
	PROFILE: "profile"
};

export const renderAction = (actionParam, key, defaultValue) => {
	const action = {
		variant: "primary",
		...defaultValue,
		...actionParam
	};
	const { type, label, href } = action;
	switch (type) {
		case ACTIONS.SIGNUP:
			return <Signup {...action} key={key} />;
		case ACTIONS.READMORE:
			return (
				<Link href={href} key={key}>
					<Button {...action} />
				</Link>
			);
		case ACTIONS.LOGIN:
			return <Login key={key} label={label} />;
		case ACTIONS.PROFILE:
			return <Profile key={key} />;
		default:
			return (
				<Link href={href} key={key}>
					<Button {...action} />
				</Link>
			);
	}
};

export const renderActions = (actions, defaultValue) => actions.map((action, i) => renderAction(action, i, defaultValue));
