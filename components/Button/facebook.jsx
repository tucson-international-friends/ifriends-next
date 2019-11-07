import { FaFacebook } from "react-icons/fa";
import classNames from "classnames";
import styles from "./button.scss";

const FacebookButton = ({ link }) => (
	<a
		className={classNames(styles.social, styles.facebook)}
		href={link}>
		<FaFacebook size={18} />
		<span> Follow Us!</span>
	</a>
);

export default FacebookButton;
