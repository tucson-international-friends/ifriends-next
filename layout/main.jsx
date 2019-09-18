import React from "react";

import addReactNDevTools from "reactn-devtools";
import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import navItems from "./navbarItems.json";
import footerNavItems from "./footerMenuItems.json";
import { getPageByName } from "../lib/page";
import "../styles/global/main.scss";
import { useEffect } from "react";
import { useGlobal } from "reactn";
import firebase from "../lib/firebase";
import { ACTIONS } from "../components/Action";

addReactNDevTools();

const MainLayout = ({ children }) => {
	if (firebase.auth().currentUser)
		useEffect(() => {
			firebase
				.auth()
				.currentUser.getIdToken(true)
				.then(token => {
					console.log(token);
				});
		}, []);
	return (
		<>
			<Meta />
			<Navbar
				navItems={navItems.map(value => getPageByName(value))}
				navActions={[
					// { type: ACTIONS.LOGIN },
					{ type: ACTIONS.SIGNUP }
				]}
			/>
			<div className="page">{children}</div>
			<Footer menuItems={footerNavItems.map(value => getPageByName(value))} />
		</>
	);
};
export default MainLayout;
