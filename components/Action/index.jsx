import Link from "next/link";
import Button, { Signup } from "../Button";
import Login from "./login";

export const ACTIONS = {
	SIGNUP: "signup",
	READMORE: "readmore",
	LOGIN: "login"
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
			return <Login key={key} label={action.label} />;
		default:
			return (
				<Link href={href} key={key}>
					<Button {...action} />
				</Link>
			);
	}
};
// eslint-disable-next-line max-len
export const renderActions = (actions, defaultValue) => actions.map((action, i) => renderAction(action, i, defaultValue));
