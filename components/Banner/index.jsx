import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import classNames from "classnames";
import Image from "react-bootstrap/Image";
import { renderActions } from "../Action";

import styles from "./styles.scss";

const Banner = ({ message = "Banner Message", actions, image }) => (
	<Jumbotron fluid className={classNames(styles.banner)}>
		{image && <Image fluid className={classNames(styles.background)} src={image} />}
		<Container className={styles.container}>
			<h1>{message}</h1>
			{actions && renderActions(actions)}
		</Container>
	</Jumbotron>
);

export default Banner;
