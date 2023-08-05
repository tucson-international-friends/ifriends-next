import { FaFacebook } from "react-icons/fa";
import classNames from "classnames";

const FacebookButton = ({ link }) => (
  <a className={classNames("social", "facebook")} href={link}>
    <FaFacebook size={18} />
    <span> Follow Us On Facebook!</span>
  </a>
);

export default FacebookButton;
