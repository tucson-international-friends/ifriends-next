import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";

import styles from "./footer.scss";

const Footer = () => (
	<div className={styles.footer}>
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
	</div>
);

export default Footer;
