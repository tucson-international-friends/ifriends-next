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

addReactNDevTools();


const MainLayout = ({ children, dashboardView }) => {
	const [user, setUser] = useGlobal("user");
	useEffect(() => {
		firebase.auth().onAuthStateChanged((u) => {
			if (u) {
				setUser(firebase.auth().currentUser);
			} else {
				setUser(undefined);
			}
		});
	}, []);
	return (
		<React.Fragment>
			<Meta />
			<Navbar
				dashboardView={dashboardView}
				navItems={navItems.map(value => getPageByName(value))}
				user={user} />
			<div
				className="page"
			>{children}
			</div>
			<Footer menuItems={footerNavItems.map(value => getPageByName(value))} />
		</React.Fragment>
	);
};
export default MainLayout;
