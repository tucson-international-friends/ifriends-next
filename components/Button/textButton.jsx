import classNames from "classnames";
import styles from "./styles.scss";

const TextButton = ({ type, icon, children }) => (
	<a className={classNames(styles.textButton, `text-${type}`)}>
		<span>{children}</span>
		{icon}
	</a>
);

export default TextButton;
