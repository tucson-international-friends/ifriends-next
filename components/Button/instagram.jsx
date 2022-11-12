import { FaInstagram } from "react-icons/fa";
import classNames from "classnames";

const InstagramButton = ({ link }) => (
	<a
		className={classNames("social", "instagram")}
		href={link}>
		<FaInstagram size={18} />
		<span>  Follow Us On Instagram!</span>
	</a>
);

export default InstagramButton;