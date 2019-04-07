import { Row, Col, Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import classNames from "classnames/bind";
import styles from "./styles.scss";
import { renderActions } from "../Action";

const cx = classNames.bind(styles);

export const COLORS = {
	DARK: "dark",
	LIGHT: "light"
};

const ImageTextBlock = ({
	title,
	content,
	image,
	invert,
	color = COLORS.DARK,
	actions
}) => (
	<Row className="container">
		<Col
			md={{ span: 6, offset: invert ? 6 : 0 }}
			className={cx("imageCol", color)}>
			<Image src={image} />
		</Col>
		<div className={cx("backdrop", color, { invert })} />
		<Col
			md={{ span: 6, offset: invert ? 0 : 6 }}
			className={cx("textCol", styles[color])}>
			<div className={cx("textContainer")}>
				<h2>{title}</h2>
				<ReactMarkdown source={content} />
				{actions && renderActions(actions, { variant: "outline-light", label: "Learn More" })}
			</div>
		</Col>
	</Row>
);

export default ImageTextBlock;
