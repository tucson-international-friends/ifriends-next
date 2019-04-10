import ReactMarkDown from "react-markdown";
import classNames from "classnames/bind";
import Jumbotron from "react-bootstrap/Jumbotron";
import { GoArrowRight } from "react-icons/go";
import styles from "./styles.scss";
import { renderActions } from "../Action";

const cx = classNames.bind(styles);

export const VARIANTS = { CALLOUT: "callout" };

const TextBlock = ({ title, content, actions, variant, headerAlign, textAlign = "left" }) => {
	const isCallout = variant === VARIANTS.CALLOUT;
	const component = (
		<div className={`${cx("textBlock", { callout: isCallout })} text-${textAlign}`}>
			<h2 className={`${styles.title} text-${headerAlign || textAlign}`}>{title}</h2>
			<ReactMarkDown
				source={content}
			/>
			{actions && renderActions(actions, { variant: "text-primary", label: "Read More", icon: GoArrowRight() })}
		</div>
	);
	return isCallout ? (
		<Jumbotron className={styles.callout}>{component}</Jumbotron>
	) : (
		component
	);
};

export default TextBlock;
