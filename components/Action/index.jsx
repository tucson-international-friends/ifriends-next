import Link from "next/link";
import Button, { Signup } from "../Button";

export const ACTIONS = {
	SIGNUP: "signup",
	READMORE: "readmore"
};


export const renderAction = (actionParam, key, defaultValue) => {
	const action = {
		variant: "primary",
		...defaultValue,
		...actionParam
	};
	const { type, label, href } = action;
	if (type === ACTIONS.SIGNUP) {
		return <Signup {...action} key={key} />;
	} if (type === ACTIONS.READMORE) {
		return (
			<Link href={href} key={key}>
				<Button {...action} />
			</Link>
		);
	}
	return <div key={key}>Action {type} {label}</div>;
};

// eslint-disable-next-line max-len
export const renderActions = (actions, defaultValue) => actions.map((action, i) => renderAction(action, i, defaultValue));
