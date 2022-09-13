import React from "react";
import { Container } from "react-bootstrap";
import MainLayout from "../layout/main";
import { getStorageMediaUrl } from "../lib/image";
import notion from "../lib/notion";

const newsletterDatabaseId = "71147bd2ca1944e6ae7b433893bb0ba9";

export const getStaticProps = async () => {
	const res = await notion.databases.query({
		database_id: newsletterDatabaseId,
		sorts: [{
			property: "Year",
			direction: "descending"
		}]
	});
	console.log(res);
	const newsLetters = res.results.map(({ properties }) => {
		return {
			title: properties.Name.title[0].plain_text,
			path: properties.PDF.files?.[0]?.file.url
		};
	});

	return {
		revalidate: 60,
		props: { newsLetters }
	};
};


const NewsLetters = ({ newsLetters }) => {
	const latest = newsLetters[0];
	const past = newsLetters.slice(1);
	return (
		<MainLayout>
			<Container style={{
				paddingTop: "10em",
				paddingBottom: "10em"
			}}>

				<div className="py-4">
					<h2>Latest Newsletter - {latest.title}</h2>
					<a rel="noreferrer" className="btn btn-primary" target="_blank" href={latest.path}>View PDF</a>

				</div>
				<iframe title="latest newsletter" width="100%" style={{ height: "75vh" }} src={latest.path} />
				<div className="py-4">
					<h2>Archive</h2>
					<ul>
						{past.map(({ path, title }) => (
							<li key={path}>
								{title} - <a href={path}>view</a>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</MainLayout>
	);
};

export default NewsLetters;
