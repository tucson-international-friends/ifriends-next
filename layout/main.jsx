import React from "react";

import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import navItems from "./navbarItems.json";

import "../styles/global/main.scss";
import { getPageByName } from "../lib/page";
import { ACTIONS } from "../components/Action";

const MainLayout = ({ children }) => (
	<React.Fragment>
		<Meta />
		<Navbar
			navItems={navItems.map(value => getPageByName(value))}
			navActions={[{ type: ACTIONS.SIGNUP }]} />
		<div className="page">{children}</div>
		<Footer />
	</React.Fragment>
);

export default MainLayout;
