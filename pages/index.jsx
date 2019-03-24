import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";

export default class Index extends React.Component {
	static async getInitialProps() {
		return {
			contents: [
				{
					title: "Who We Are",
					content:
						"International Friends provides opportunities for international students and hosts to develop close friendships, and an understanding of and appreciation for each other's culture. We offer activities through which international students may participate in the life of the community. We subscribe to the national guidelines set forth by [NAFSA: Association of International Educators](http://www.nafsa.org/) on the rights of international students."
				},
				{
					title: "What We Do",
					content:
						"Our goal is simple but important: Give international students a stronger sense of place and community while they're studying in Tucson. International students and local Friends (hosts) get together periodically throughout the year. Participation is open to any Tucson-area resident interested in a respectful exchange of customs and ideas. We are not a live-in hosting program and have no religious affiliation."
				}
			]
		};
	}

	render() {
		const { contents } = this.props;
		return (
			<MainLayout>
				<Banner />
				<Container>
					<Row>
						<Col md={6}>
							<TextBlock {...contents[0]} />
						</Col>
						<Col md={6}>
							<TextBlock {...contents[1]} />
						</Col>
					</Row>
				</Container>
			</MainLayout>
		);
	}
}
