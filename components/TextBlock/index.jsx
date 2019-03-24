import ReactMarkDown from "react-markdown";
import styles from "./styles.scss";

const TextBlock = ({ title, content, action }) => (
	<div className={styles.textBlock}>
		<h2 className={styles.title}>{title}</h2>
		<ReactMarkDown source={content} />
		{action}
	</div>
);

export default TextBlock;
