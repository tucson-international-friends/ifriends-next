import {
 Navbar, Nav, Row, Container 
} from "react-bootstrap";
import { FaBars, FaGlobeAmericas } from "react-icons/fa";
import Link from "next/link";

export default () => (
	<Navbar expand="md" variant="dark" bg="dark">
		<Container>
			<Navbar.Brand>
				<FaGlobeAmericas size="2em" color="var(--info)" />
				<img
					src="/static/logo.svg"
					alt="logo"
					style={{
						height: "2em"
					}}
				/>
			</Navbar.Brand>
			<Navbar.Toggle
				aria-controls="main-navbar-nav"
				style={{
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
			<Navbar.Collapse
				id="main-navbar-nav"
				className="flex-md-column flex-lg-row">
				<Nav className="ml-md-auto ml-lg-0 mr-lg-auto order-md-1 order-lg-0">
					<Nav.Link active>Home</Nav.Link>
					<Nav.Link>About Us</Nav.Link>
					<Nav.Link>Hosts</Nav.Link>
					<Nav.Link>Students</Nav.Link>
					<Nav.Link>Events</Nav.Link>
					<Nav.Link>News</Nav.Link>
				</Nav>
				<Nav className="ml-auto order-md-0 order-lg-1">
					<Nav.Link>Login</Nav.Link>
					<Nav.Link>Signup</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);
