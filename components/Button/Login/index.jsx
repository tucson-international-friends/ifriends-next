/* eslint-disable react/display-name */
import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";

import firebase, { facebookProvider, googleProvider } from "../../../lib/firebase";

export const PROVIDERS = {
	GOOGLE: "Google",
	FACEBOOK: "Facebook"
};

const { GOOGLE, FACEBOOK } = PROVIDERS;

const props = {
	[GOOGLE]: {
		Icon: () => (
			<Image
				style={{
					width: 36,
					height: 36
				}}
				src="static/icons/btn_google_light_normal_ios.svg"
				alt="google-logo"
			/>
		),
		provider: googleProvider,
		color: "light"
	},
	[FACEBOOK]: {
		Icon: () => (
			<FaFacebookF
				style={{
					width: 16,
					height: 16,
					margin: "10 8"
				}}
				color="primary"
			/>
		),
		provider: facebookProvider,
		color: "primary"
	}
};

const LoginButton = ({ variant, handleSuccess, handleError }) => {
	if (!(variant in PROVIDERS)) {
		return null;
	}
	// eslint-disable-next-line react/destructuring-assignment
	const { provider, color, Icon } = props[variant];
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const handleLogin = useCallback(() => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(handleSuccess)
			.catch(handleError);
	}, [provider, handleSuccess, handleError]);
	return (
		<Button
			variant={color}
			size="sm"
			block
			style={{
				textAlign: "right",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				textTransform: "none"
			}}
			onClick={() => handleLogin()}>
			<Icon />
			<span style={{ flexGrow: 1 }}>Sign in with {variant}</span>
		</Button>
	);
};

export default LoginButton;
