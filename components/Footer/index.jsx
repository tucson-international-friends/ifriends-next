import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import { FaMapMarked, FaPhone, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import FacebookButton from "../Button/facebook";

const Address = () => (
	<>
		<h6>
			<FaMapMarked size={24} className="headerIcon" />
			<span>Address</span>
		</h6>
		<p>
			<a href="https://goo.gl/maps/3PF4UE3ZkaModhdi8">
				International Student Services (ISS)
				<br />
				615 N Park Avenue, AZ 85719
			</a>
		</p>
	</>
);

const Phone = () => (
	<>
		<h6>
			<FaPhone
				style={{ transform: "rotateY(180deg)" }}
				className="headerIcon"
			/>
			<span>Phone Number</span>
		</h6>
		<p>
			<a href="">(520) 621-4627</a>
		</p>
	</>
);

const Email = () => (
	<>
		<h6>
			<FaEnvelope
				style={{ transform: "rotateY(180deg)" }}
				className="headerIcon"
			/>
			<span>Email Address</span>
		</h6>
		<p>
			<a href="">info@ifriendstucson.org</a>
		</p>
	</>
);

const Footer = ({ menuItems }) => (
	<footer className="footer">
		<Container>
			<Row>
				<Col md={8}>
					<h1>International Friends, Inc.</h1>
					<p>
						International Friends is an all-volunteer organization that brings together international students attending the University of Arizona and Southern Arizona residents.
					</p>
					<Row className="mt-4 mb-2">
						<Col sm={5}>
							<Address />
						</Col>
						<Col sm={4}>
							<Phone />
						</Col>
						<Col sm={3}>
							<Email />
						</Col>
					</Row>
					<div className="pt-1">
						<FacebookButton link="https://www.facebook.com/groups/298210727017/" />
					</div>
				</Col>
				<Col md={4} className="pl-5">
					<h2>Menu</h2>
					<ul className="menu">
						{menuItems.map(menuItem => (
							<li key={menuItem.name}>
								<Link href={menuItem.route}>
									<a>{menuItem.label}</a>
								</Link>
							</li>
						))}
					</ul>
				</Col>
			</Row>
			<Row className="mt-4">
				<Col>
					<p className="copyright">
						&copy;
						{` ${moment().year()} International Friends, Inc. All Rights
						Reserved. Web Design by `}
						<a href="https://webreview.octaviamedia.com/">
							Octavia Digital Media
						</a>
						{" and enhanced by Youhao Wei"}
					</p>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
