import ReactMarkDown from "react-markdown";
import Link from "next/link";
import { TextButton } from "../Button";
import styles from "./styles.scss";

const TextBlock = ({ title, content, readMore }) => (
	<div className={styles.textBlock}>
		<h2 className={styles.title}>{title}</h2>
		<ReactMarkDown source={content} />
		{readMore && (
			<Link href={readMore.href}>
				<TextButton type="primary">Read More</TextButton>
			</Link>
		)}
	</div>
);

export default TextBlock;
