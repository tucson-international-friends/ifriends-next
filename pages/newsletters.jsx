import React from "react";
import MainLayout from "../layout/main";
import { Container } from "react-bootstrap";
import { getStorageMediaUrl } from "../lib/image";
import useWindowSize from "../hooks/useWindowSize";

const newsLetters = [{
	title: 'Summer 2020',
	path: 'SM2020.pdf'
}, {
	title: "Spring 2020",
	path: 'SP2020.pdf'
}];


const NewsLetters = () => {
	const { width, height } = useWindowSize();
	const latest = newsLetters[0];
	const past = newsLetters.slice(1);
	return <MainLayout>
		<Container style={{
			paddingTop: "10em",
			paddingBottom: "10em"
		}}>

			<div className="py-4">
				<h2>Latest - {latest.title}</h2>
				<a className="btn btn-primary" target="_blank" href={getStorageMediaUrl(`newsletters/${latest.path}`)} >View PDF</a>

			</div>
			<iframe width="100%" style={{ height: "75vh" }} src={getStorageMediaUrl(`newsletters/${latest.path}`)} />
			<div className="py-4">
				<h2>Archive</h2>
				<ul>
					{past.map(({ path, title }) => <li key={path}>
						{title} - <a href={getStorageMediaUrl(`newsletters/${path}`)}>view</a>
					</li>)}
				</ul>
			</div>
		</Container>
	</MainLayout>;
};

export default NewsLetters;