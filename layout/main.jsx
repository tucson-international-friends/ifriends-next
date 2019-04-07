import React from "react";

import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/global/main.scss";

const MainLayout = ({ children }) => (
	<React.Fragment>
		<Meta />
		<Navbar />
		<div className="page">{children}</div>
		<Footer />
	</React.Fragment>
);

export default MainLayout;
