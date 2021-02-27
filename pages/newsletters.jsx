import React from "react";
import { Container } from "react-bootstrap";
import MainLayout from "../layout/main";
import { getStorageMediaUrl } from "../lib/image";

const newsLetters = [{
	title: "Summer 2020",
	path: "SM2020.pdf"
}, {
	title: "Spring 2020",
	path: "SP2020.pdf"
}, {
	title: "Fall 2016",
	path: "IF.Newsletter.2016.pdf"
}, {
	title: "Fall 2015",
	path: "IF.Newsletter.2015.pdf"
}, { title: "Fall 2013", path: "IF.Newsletter.2013.pdf" },
{ title: "Fall 2012", path: "If.Newsletter.2012.pdf" }];


const NewsLetters = () => {
	const latest = newsLetters[0];
	const past = newsLetters.slice(1);
	return (
		<MainLayout>
			<Container style={{
				paddingTop: "10em",
				paddingBottom: "10em"
			}}>

				<div className="py-4">
					<h2>Latest - {latest.title}</h2>
					<a rel="noreferrer" className="btn btn-primary" target="_blank" href={getStorageMediaUrl(`newsletters/${latest.path}`)}>View PDF</a>

				</div>
				<iframe title="latest newsletter" width="100%" style={{ height: "75vh" }} src={getStorageMediaUrl(`newsletters/${latest.path}`)} />
				<div className="py-4">
					<h2>Archive</h2>
					<ul>
						{past.map(({ path, title }) => (
							<li key={path}>
								{title} - <a href={getStorageMediaUrl(`newsletters/${path}`)}>view</a>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</MainLayout >
	);
};

export default NewsLetters;
