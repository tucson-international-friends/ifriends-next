import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import classNames from "classnames";
import Image from "react-bootstrap/Image";
import { renderActions } from "../Action";

const Banner = ({ message = "Banner Message", actions, image }) => (
	<Jumbotron fluid className="banner">
		{image && <Image fluid className={classNames("background")} src={image} />}
		<Container className={"container"}>
			<h1>{message}</h1>
			{actions && renderActions(actions)}
		</Container>
	</Jumbotron>
);

export default Banner;
