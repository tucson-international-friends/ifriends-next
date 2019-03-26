import { Row, Col, Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import styles from "./styles.scss";

const ImageTextBlock = ({ title, content, image, revert, readMore }) => (
	<Row noGutters>
		<Col md={{ span: 6, offset: revert ? 6 : 0 }} className={styles.imageBlock}>
			<Image src={image} fluid />
		</Col>
		<Col md={{ span: 6 }} className={styles.textBlock}>
			<h2>{title}</h2>
			<ReactMarkdown source={content} />
		</Col>
	</Row>
);

export default ImageTextBlock;
