import { Row, Col, Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import styles from "./styles.scss";

const ImageTextBlock = ({
	title,
	content,
	image,
	revert,
	color = "dark",
	readMore
}) => {
	if (revert) {
		color = "light";
	}
	return (
		<Row className={styles.container}>
			<Col
				md={{ span: 6, offset: revert ? 6 : 0 }}
				className={classNames(styles.imageCol, styles[color])}>
				<Image src={image} />
			</Col>
			<div className={classNames(styles.backdrop, styles[color])} />
			<Col
				md={{ span: 6, offset: revert ? 0 : 6 }}
				className={classNames(styles.textCol, styles[color])}>
				<div className={styles.textContainer}>
					<h2>{title}</h2>
					<ReactMarkdown source={content} />
				</div>
			</Col>
		</Row>
	);
};

export default ImageTextBlock;
