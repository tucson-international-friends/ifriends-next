import ReactMarkdown from "react-markdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import classNames from "classnames/bind";
import { renderActions } from "../Action";

import styles from "./styles.scss";

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
	actions,
	extraHeight
}) => (
	<Row className="container">
		<div
			className={cx("imageCol", color, { not_invert: !invert }, { invert }, { xh: extraHeight })}>
			<Image fluid src={image} />
		</div>
		<div className={cx("backdrop", color, { invert }, { xh: extraHeight })} />
		<Col
			md={{ span: 6, offset: invert ? 0 : 6 }}
			className={cx("textCol", styles[color], { xh: extraHeight })}>
			<div className={cx("textContainer")}>
				<h2>{title}</h2>
				<ReactMarkdown source={content} />
				{actions && renderActions(actions, { variant: "outline-light", label: "Learn More" })}
			</div>
		</Col>
	</Row>
);

export default ImageTextBlock;
