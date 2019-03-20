import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import moment from "moment";

const Footer = () => (
	<footer>
		<Container>
			<Row>
				<Col md={6}>
					<h1>International Friends, Inc.</h1>
					<p>
						{`International Friends is an all-volunteer organization that brings
					together international students attending the University of Arizona
					and residents of Tucson.`}
					</p>
				</Col>
			</Row>
			<Row className="mt-5">
				<Col>
					<p className="copyright">
						&copy; {moment().year()} International Friends, Inc. All Rights
						Reserved. Web Design by
						<Link href="https://webreview.octaviamedia.com/">
							<a> Octavia Media </a>
						</Link>
						{"and enhanced by Youhao Wei"}
					</p>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
