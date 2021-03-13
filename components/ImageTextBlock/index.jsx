import ReactMarkdown from "react-markdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import classNames from "classnames/bind";
import { renderActions } from "../Action";

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
	<Row className="imageTextBox">
		<div className={classNames("backdrop", color, { invert }, { xh: extraHeight })} />
		<div
			className={classNames("imageCol", color, { not_invert: !invert }, { invert }, { xh: extraHeight })}>
			<Image
				rounded
				fluid
				src={image}
			/>
		</div>
		<Col
			md={{ span: 6, offset: invert ? 0 : 6 }}
			className={classNames("textCol", color, { xh: extraHeight })}>
			<div className={classNames("textContainer")}>
				<h2>{title}</h2>
				<ReactMarkdown>{content}</ReactMarkdown>
				{actions && renderActions(actions, { variant: "outline-light", label: "Learn More" })}
			</div>
		</Col>
	</Row>
);

export default ImageTextBlock;
