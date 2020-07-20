import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock, { VARIANTS } from "../components/TextBlock";
import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import { ACTIONS } from "../components/Action";
import ReactPlayer from "react-player";

export default class Index extends Component {
	static async getInitialProps() {
		return {
			banner: {
				message: "EVERY STUDENT NEEDS A SENSE OF HOME, WHEREVER THEY ARE FROM.",
				image: "/images/home-banner.jpg",
				actions: [
					{
						type: "signup",
						label: "join us",
						size: "lg"
					}
				]
			},
			sections: [
				// section 1
				[
					{
						title: "Who We Are",
						textAlign: "justify",
						content:
							"International Friends provides opportunities for international students and local hosts to develop close friendships and an understanding of and appreciation for each other's cultures. We offer activities through which international students may participate in the life of the community. We subscribe to the national guidelines set forth by [NAFSA: Association of International Educators](http://www.nafsa.org/) on the rights of international students.",
						actions: [
							{
								type: ACTIONS.READMORE,
								href: "/about"
							}
						]
					},
					{
						title: "What We Do",
						textAlign: "justify",
						content:
							"Our goal is simple but important. We bring people together to share their cultures, interests, and life experiences. International students and local hosts are matched with the intent of them meeting at least once a month during the school year for socializing, activities, and fun. International Friends is not a live-in hosting program, and we have no religious affiliation. Participation is open to international students attending the University of Arizona and to Southern Arizona residents.",
						actions: [
							{
								type: ACTIONS.READMORE,
								href: "/hosts"
							}
						]
					}
				],
				// section 2
				[
					{
						title: "Why Host?",
						content: `
* Learn about other countries and cultures
* Participate in activities with interesting and eager students
* Help international students adjust to American culture
* Have fun!`,
						image: "/images/zipline.jpg",
						actions: [
							{
								type: ACTIONS.READMORE,
								href: "/hosts"
							}
						]
					},
					{
						title: "What is Expected?",
						image: "/images/host.jpg",
						content: `
* Commit to participate for one academic year
* Hosts and students contact each other within one week of being matched
* Students and hosts get together at least once a month during the school year for activities that both would enjoy
* Hosts and students share ideas, customs, and cultures
* Follow the International Friends Guidelines for hosts and students
`,
						actions: [
							{
								type: ACTIONS.READMORE,
								href: "/hosts"
							}
						]
					}
				],
				{
					title: "Get Involved",
					textAlign: "center",
					content: `
Make a “world of difference” in the lives of international students and local hosts.  It’s fun, it’s easy, and it changes lives.`,
					actions: [
						{
							type: ACTIONS.SIGNUP,
							label: "join us",
							size: "lg"
						}
					]
				}
			]
		};
	}

	render() {
		const { sections, banner, intro } = this.props;
		return (
			<MainLayout>
				<Banner {...banner} />
				<Container>
					<Row>
						<Col md={6}>
							<TextBlock {...sections[0][0]} />
							<TextBlock {...sections[0][1]} />
						</Col>
						<Col md={6}>
							<iframe className="embed-video" allow="autoplay" allowfullscreen="" src="https://arizona.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=06dd0cd1-402e-4042-bd61-abf8013f6212&amp;autoplay=false&amp;offerviewer=true&amp;showtitle=false&amp;showbrand=false&amp;start=0&amp;interactivity=all" style={{
								width: "100%"
							}}/>
						</Col>
						
					</Row>
					<ImageTextBlock {...sections[1][0]} extraHeight invert />
					<ImageTextBlock
						{...sections[1][1]}
						extraHeight
						color={COLORS.LIGHT}
					/>
					<TextBlock {...sections[2]} variant={VARIANTS.CALLOUT} />
				</Container>
			</MainLayout>
		);
	}
}
