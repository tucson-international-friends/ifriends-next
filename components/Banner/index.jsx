import { Jumbotron, Container } from "react-bootstrap";
import styles from "./styles.scss";

const Banner = ({ message = "Banner Message" }) => (
	<Jumbotron fluid className={styles.banner}>
		<Container className={styles.container}>
			<h1>{message}</h1>
		</Container>
	</Jumbotron>
);

export default Banner;
