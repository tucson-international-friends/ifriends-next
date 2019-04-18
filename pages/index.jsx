import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock, { VARIANTS } from "../components/TextBlock";
import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import { ACTIONS } from "../components/Action";

export default class Index extends Component {
	static async getInitialProps() {
		return {
			banner: {
				message: "EVERY STUDENT NEEDS A SENSE OF HOME, WHEREVER THEY ARE FROM.",
				image: "/static/images/home-banner.jpg",
				actions: [{
					type: "signup",
					label: "join us",
					size: "lg"
				}]
			},
			sections: [
				// section 1
				[
					{
						title: "Who We Are",
						textAlign: "justify",
						content:
							"International Friends provides opportunities for international students and hosts to develop close friendships, and an understanding of and appreciation for each other's culture. We offer activities through which international students may participate in the life of the community. We subscribe to the national guidelines set forth by [NAFSA: Association of International Educators](http://www.nafsa.org/) on the rights of international students.",
						actions: [{
							type: ACTIONS.READMORE,
							href: "/about"
						}]
					},
					{
						title: "What We Do",
						textAlign: "justify",
						content:
							"Our goal is simple but important: Give international students a stronger sense of place and community while they're studying in Tucson. International students and local Friends (hosts) get together periodically throughout the year. Participation is open to any Tucson-area resident interested in a respectful exchange of customs and ideas. We are not a live-in hosting program and have no religious affiliation.",
						actions: [{
							type: ACTIONS.READMORE,
							href: "/hosts"
						}]
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
* Have fun and help others!	`,
						image: "/static/images/zipline.jpg",
						actions: [{
							type: ACTIONS.READMORE,
							href: "/hosts"
						}]
					},
					{
						title: "What's Expected?",
						image: "/static/images/host.jpg",
						content: `
* Commit to one academic year.
* Contact your student within one week (students are eager to get acquainted).
* Communicate with your student at least once a month to plan activities you would both enjoy.
* Approach your student with an open mind and learn from each other.
* Understand and follow the organization’s guidelines.`,
						actions: [{
							type: ACTIONS.READMORE,
							href: "/hosts"
						}]
					}
				],
				{
					title: "Get Involved",
					textAlign: "center",
					content: `
Make a "world of difference" in the life of a student or local host. 
It's fun, it's easy, and it changes lives.`,
					actions: [{
						type: ACTIONS.SIGNUP,
						label: "join us",
						size: "lg"
					}]
				},
			]
		};
	}

	render() {
		const { sections, banner } = this.props;
		return (
			<MainLayout>
				<Banner {...banner} />
				<Container>
					<Row>
						<Col md={6}>
							<TextBlock {...sections[0][0]} />
						</Col>
						<Col md={6}>
							<TextBlock {...sections[0][1]} />
						</Col>
					</Row>
					<ImageTextBlock {...sections[1][0]} extraHeight invert />
					<ImageTextBlock {...sections[1][1]} extraHeight color={COLORS.LIGHT} />
					<TextBlock
						{...sections[2]}
						variant={VARIANTS.CALLOUT}
					/>
				</Container>
			</MainLayout>
		);
	}
}
