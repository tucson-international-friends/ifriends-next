import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

export default ({ size, className }) => {
	let logoSize = "2em";
	if (size === "sm" || size === "small" || size === 1) {
		logoSize = "1.25em";
	}
	return (
		<span className={className}>
			<FaGlobeAmericas size={logoSize} color="var(--info)" />
			<img src="/static/logo.svg" alt="logo" style={{ height: logoSize }} />
		</span>
	);
};
