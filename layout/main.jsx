import React from "react";

import addReactNDevTools from "reactn-devtools";
import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import navItems from "./navbarItems.json";
import footerNavItems from "./footerMenuItems.json";
import { getPageByName } from "../lib/page";
import "../styles/global/main.scss";

addReactNDevTools();


const MainLayout = ({ children }) => (
	<React.Fragment>
		<Meta />
		<Navbar
			navItems={navItems.map(value => getPageByName(value))} />
		<div
			className="page"
		>{children}
		</div>
		<Footer menuItems={footerNavItems.map(value => getPageByName(value))} />
	</React.Fragment>
);
export default MainLayout;
