import Link from "next/link";
import Button, { Signup } from "../Button";
import Auth from "../../lib/auth";

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
			return (
				<Button
					variant="outline-light"
					key={key}
					label={action.label || "Log in"}
					onClick={() => {
						const auth = new Auth();
						auth.login();
					}} />
			);
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
