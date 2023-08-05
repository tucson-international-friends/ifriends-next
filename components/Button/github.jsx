import { FaGithub } from "react-icons/fa";
import classNames from "classnames";

const FacebookButton = ({ link }) => (
  <a className={classNames("social", "github")} href={link}>
    <FaGithub size={18} />
    <span> Contribute!</span>
  </a>
);

export default FacebookButton;
