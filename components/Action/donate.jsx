import React from "react";
import Button from "../Button";

export default function Donate({ size }) {
	return (
		<>
			<script
				type="text/javascript"
				defer
				src="https://donorbox.org/install-popup-button.js"
			/>
			<Button
				href="https://donorbox.org/ongoing-support-for-international-friends"
				className="dbox-donation-button"
				size={size}
				label="Support"
			/>
		</>
	);
}
