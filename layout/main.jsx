import React from "react";

import Meta from "../components/meta";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

import "../styles/main.scss";


const MainLayout = ({ children }) => (
	<React.Fragment>
		<Meta />
		<Navbar />
		{children}
		<Footer />
	</React.Fragment>
);

export default MainLayout;
