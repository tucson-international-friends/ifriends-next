import Link from "next/link";
import Button from "../Button";
import Login from "./login";
import Profile from "./profile";
import Signup from "./signup";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";

export const ACTIONS = {
	SIGNUP: "signup",
	READMORE: "readmore",
	LOGIN: "login",
	PROFILE: "profile"
};

export const renderAction = (actionParam, key, defaultValue) => {
	const router = useRouter();
	const action = useMemo(
		() => ({
			variant: "primary",
			...defaultValue,
			...actionParam
		}),
		[actionParam, defaultValue]
	);

	const { type, label, href } = action;
	const gotoHref = useCallback(() => {
		router.push(href);
	}, [href]);
	switch (type) {
		case ACTIONS.SIGNUP:
			return <Signup {...action} key={key} />;
		case ACTIONS.LOGIN:
			return <Login key={key} label={label} />;
		case ACTIONS.PROFILE:
			return <Profile key={key} />;
		case ACTIONS.READMORE:
		default:
			return <Button key={key} {...action} onClick={gotoHref} />;
	}
};

export const renderActions = (actions, defaultValue) =>
	actions.map((action, i) => renderAction(action, i, defaultValue));
