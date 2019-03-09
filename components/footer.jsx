import { Container, Row, Col } from "react-bootstrap";

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
		</Container>
	</footer>
);

export default Footer;
