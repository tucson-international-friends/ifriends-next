import { Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

export default () => (
	<Navbar bg="dark" expand="lg" variant="dark">
		<Navbar.Brand>
			<img src="/static/logo.svg" alt="logo" height="2em" />
		</Navbar.Brand>
		<Navbar.Toggle aria-controls="main-navbar-nav" style={{
			border: "none"
		}}>
			<FaBars />
			<span
				style={{
					display: "inline-block",
					verticalAlign: "middle",
					paddingLeft: 5
				}}>
				{"Menu"}
			</span>
		</Navbar.Toggle>
		<Navbar.Collapse id="main-navbar-nav" />
	</Navbar>
);
