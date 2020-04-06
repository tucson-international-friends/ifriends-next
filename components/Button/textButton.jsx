import classNames from "classnames";

const TextButton = ({ type, icon, onClick, children }) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events
	<a
		role="button"
		className={classNames("textButton", `text-${type}`)}
		onClick={onClick}>
		<span>{children}</span>
		{icon}
	</a>
);

export default TextButton;
