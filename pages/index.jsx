import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import ImageTextBlock from "../components/ImageTextBlock";

export default class Index extends React.Component {
	static async getInitialProps() {
		return {
			sections: [
				// section 1
				[
					{
						title: "Who We Are",
						content:
							"International Friends provides opportunities for international students and hosts to develop close friendships, and an understanding of and appreciation for each other's culture. We offer activities through which international students may participate in the life of the community. We subscribe to the national guidelines set forth by [NAFSA: Association of International Educators](http://www.nafsa.org/) on the rights of international students.",
						readMore: { href: "/about-us" }
					},
					{
						title: "What We Do",
						content:
							"Our goal is simple but important: Give international students a stronger sense of place and community while they're studying in Tucson. International students and local Friends (hosts) get together periodically throughout the year. Participation is open to any Tucson-area resident interested in a respectful exchange of customs and ideas. We are not a live-in hosting program and have no religious affiliation.",
						readMore: { href: "/host-a-student" }
					}
				],
				// section 2
				[
					{
						title: "Why Host?",
						content: `
* Learn about other countries and cultures.
* Enjoy sharing in activities with eager students.
* Help new students adjust to American culture.
* Have fun and help others!
						`,
						image: "http://ifriendstucson.org/images/zipline.jpg",
						readMore: { href: "/host-a-student" }
					},
					{
						title: "What's Expected?",
						image: "http://ifriendstucson.org/images/host.jpg",
						content: `
* Commit to one academic year.
* Contact your student within one week (students are eager to get acquainted).
* Communicate with your student at least once a month to plan activities you would both enjoy.
* Approach your student with an open mind and learn from each other.
* Understand and follow the organization’s guidelines.
						`,
						readMore: { href: "/host-a-student" }
					}
				]
			]
		};
	}

	render() {
		const { sections } = this.props;
		return (
			<MainLayout>
				<Banner />
				<Container>
					<Row>
						<Col md={6}>
							<TextBlock {...sections[0][0]} />
						</Col>
						<Col md={6}>
							<TextBlock {...sections[0][1]} />
						</Col>
					</Row>
					<ImageTextBlock {...sections[1][0]} invert />
					<ImageTextBlock {...sections[1][1]} color="light" />
				</Container>
			</MainLayout>
		);
	}
}
