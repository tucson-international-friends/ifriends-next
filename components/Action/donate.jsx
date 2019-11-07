import Head from "next/head";
import React from "react";
import Button from "../Button";

export default function Donate({ size }) {
	return (
		<>
			<Head>
				<script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js" />
			</Head>
			<Button href="https://donorbox.org/test-769" className="dbox-donation-button" size={size} label="Donate" />
		</>
	);
}
