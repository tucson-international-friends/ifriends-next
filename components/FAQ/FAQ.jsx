import { useState } from "react";
import ReactMarkDown from "react-markdown";
import classNames from "classnames";
import Collapse from "react-bootstrap/Collapse";
import { FaCaretRight } from "react-icons/fa";

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
					className={classNames("question")}>
					<FaCaretRight className={
						classNames("caret", { expanded })} />{data.question}
				</h5>
			</a>
			<Collapse in={expanded}>
				<ReactMarkDown className={classNames("pl-1")}>
					{data.answer}
				</ReactMarkDown>
			</Collapse>
		</div>
	);
};

export default FAQ;
