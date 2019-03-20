import { Jumbotron, Container } from "react-bootstrap";

const Banner = ({ message = "Banner Message" }) => (
	<Jumbotron fluid className="banner">
		<Container>
			<h1>{message}</h1>
		</Container>
	</Jumbotron>
);

export default Banner;
