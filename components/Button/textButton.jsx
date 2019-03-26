import classNames from "classnames";
import { FaArrowRight } from "react-icons/fa";
import styles from "./styles.scss";

const TextButton = ({ type, children }) => (
	<a className={classNames(styles.textButton, `text-${type}`)}>
		<span>{children}</span>
		<FaArrowRight />
	</a>
);

export default TextButton;
