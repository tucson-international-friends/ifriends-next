import { useState } from "react";
import ReactMarkDown from "react-markdown";
import classNames from "classnames";
import Collapse from "react-bootstrap/Collapse";
import { FaCaretRight } from "react-icons/fa";

import styles from "./faq.scss";

const FAQ = ({ data }) => {
	const [expanded, setExpanded] = useState(false);
	const handleClickHeader = () => {
		setExpanded(!expanded);
	};
	return (
		<div className={classNames("p-2")}>
			<a
				role="presentation"
				onClick={handleClickHeader}
				onMouseDown={(e) => {
					e.preventDefault();
				}}>
				<h5
					className={classNames(styles.question)}>
					<FaCaretRight className={
						classNames(styles.caret, { [styles.expanded]: expanded })} />{data.question}
				</h5>
			</a>
			<Collapse in={expanded}>
				<ReactMarkDown className={classNames("pl-1")} source={data.answer} />
			</Collapse>
		</div>
	);
};

export default FAQ;
