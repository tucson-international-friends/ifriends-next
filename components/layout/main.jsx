import React from "react";
import Head from "./head";
import "../../scss/main.scss";

const MainLayout = ({ children }) => (
	<React.Fragment>
		<Head />
		{children}
	</React.Fragment>
);

export default MainLayout;
