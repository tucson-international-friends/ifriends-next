import React from "react";

import Meta from "../components/meta";
import Footer from "../components/footer";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const MainLayout = ({ children }) => (
	<React.Fragment>
		<Meta />
		{children}
		<Footer />
	</React.Fragment>
);

export default MainLayout;
