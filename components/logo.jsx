import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

export default ({ size, className }) => {
	let logoSize = "2em";
	if (size === "sm" || size === "small" || size === 1) {
		logoSize = "1.5em";
	}
	return (
		<span className={className}>
			<img
				src="/logos/logo.png"
				alt="logo"
				style={{ height: logoSize }}
			/>
		</span>
	);
};
