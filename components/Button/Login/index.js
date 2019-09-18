import firebase, { facebookProvider, googleProvider } from "Libs/firebase";
import { Button } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { useCallback } from "react";

export const PROVIDERS = {
	GOOGLE: "Google",
	FACEBOOK: "Facebook"
};

const { GOOGLE, FACEBOOK } = PROVIDERS;

const props = {
	[GOOGLE]: {
		Icon: () => (
			<img
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
	if (!variant in PROVIDERS) {
		return null;
	}
	console.log(variant);
	const { provider, color, Icon } = props[variant];
	const handleLogin = useCallback(() => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(handleSuccess)
			.catch(handleError);
	}, [handleSuccess, handleError, variant]);
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
