import React from "react";
import "../styles/global.scss";
import Meta from "../components/meta";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
	<React.Fragment>
		<Meta />
		<Navbar />
		<div className="page">{children}</div>
		<Footer />
	</React.Fragment>
);

export default MainLayout;
