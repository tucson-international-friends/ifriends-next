import { Row, Col, Image, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./styles.scss";

const cx = classNames.bind(styles);

const ImageTextBlock = ({
	title,
	content,
	image,
	invert,
	color = "dark",
	readMore
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
				<Link href={readMore.href}>
					<Button variant="outline-light">Learn More</Button>
				</Link>
			</div>
		</Col>
	</Row>
);

export default ImageTextBlock;
