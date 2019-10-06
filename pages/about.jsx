import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FORMATS } from "../lib/common/format";

import MainLayout from "../layout/main";
import { ACTIONS } from "../components/Action";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import EventList from "../components/Events/List";
import BoardList from "../components/BoardList";
import Header from "../components/Header";

export default class About extends React.Component {
	static async getInitialProps() {
		return {
			banner: {
				message: "LEARN ABOUT EACH OTHER'S CULTURE",
				image: "/static/images/about-banner.jpg"
			},
			sections: [
				[
					{
						title: "Our History",
						textAlign: "justify",
						content: `
International Friends was founded in 1952 by George Lee Garner Harvill, wife of University of Arizona President Richard A. Harvill, and a group of women from Tucson.  At the time, there were just 63 international students at the University. The fledgling group was first called Families for International Friendship. The organization grew slowly through the years, relying on small donations from a variety of local individuals and organizations.

International Friends became an Arizona corporation in 2004 and also received official 501(c)(3) tax-exempt status from the IRS. This, along with the support and encouragement of international students, community hosts, and board members, provides a solid foundation for the future.`
					},
					{
						title: "International Friends Board",
						textAlign: "justify",
						content: `
The all-volunteer board is composed of past and present hosts, international students, and an ex-officio representative from the UA International Student Services office. Board meetings are held five times a year to evaluate the program and plan events. 
`,
						actions: [
							{
								type: ACTIONS.READMORE,
								href: "/by-laws",
								label: "By Laws"
							},
							{
								type: ACTIONS.READMORE,
								href: "/letter",
								label: "Letter from Co-Chairs"
							}
						]
					}
				]
			],
			eventColumns: [
				{
					name: "date",
					label: "Date",
					format: FORMATS.DATE
				},
				{
					name: "startDatetime",
					label: "Start Time",
					format: FORMATS.TIME
				},
				{
					name: "endDatetime",
					label: "End Time",
					format: FORMATS.TIME
				},
				{
					name: "name",
					label: "Event"
				},
				{
					name: "location",
					label: "Location"
				}
			],
			events: [
				{
					key: "board-meeting-jun",
					name: "Board Meeting",
					startDatetime: "2019-06-27 17:30",
					date: "2019-06-27",
					location: "ISS Office"
				},
				{
					name: "Welcome Luncheon",
					date: "2019-08-24",
					startDatetime: "2019-08-24 10:00",
					endDatetime: "2019-08-24 14:00",
					location: "First United Methodist Church"
				},
				{
					name: "New Host Orientation",
					date: "2019-09-14",
					location: "Tucson Visitor's Center"
				},
				{
					key: "board-meeting-sep",
					name: "Board Meeting",
					startDatetime: "2019-09-16 17:30",
					date: "2019-09-16",
					location: "ISS Office"
				},
				{
					key: "fall-picnic",
					name: "Fall Picnic",
					startDatetime: "2019-09-29 12:00",
					date: "2019-09-29",
					location: "Reid Park"
				},
				{
					name: "Amerind Fall Festival",
					date: "2019-10-19"
				},
				{
					name: "Biosphere Trip",
					date: "2019-10-20",
					location: "Biosphere 2"
				},
				{
					name: "International Students Talent Show",
					placeholder: "Nov TBA"
				},
				{
					name: "Presidio Living History Day",
					date: "2019-11-19"
				},
				{
					key: "board-meeting-dec",
					name: "Board Meeting",
					startDatetime: "2019-12-02 17:30",
					date: "2019-12-02",
					location: "ISS Office"
				},
				{
					name: "Welcome Brunch",
					date: "2020-01-12",
					location: "Tucson Visitor's Center"
				},
				{
					name: "Rodeo Picnic",
					date: "2020-02-23"
				},
				{
					name: "Annual Board Meeting",
					date: "2020-03-02",
					startDatetime: "2020-03-02 17:30",
					location: "ISS Office"
				},
				{
					name: "Desert Museum Tour",
					date: "2020-04-11",
					location: "Desert Museum"
				},
				{
					name: "Planning Meeting",
					date: "2020-04-18"
				}
			],
			boardMembers: [
				{
					firstName: "Patricia",
					lastName: "Gilman",
					title: "Co-Chair",
					profileImg: "/static/images/profiles/patricia_gilman.jpg"
				},
				{
					firstName: "Randy",
					lastName: "Spalding",
					title: "Co-Chair",
					profileImg: "/static/images/profiles/randy_spalding.jpeg"
				},
				{
					firstName: "Pam",
					lastName: "Obando",
					title: "Secretary",
					profileImg: "/static/images/profiles/pam_obando.jpg"
				},
				{
					firstName: "Robert",
					lastName: "Woerner",
					title: "Treasurer",
					profileImg: "/static/images/profiles/robert_woerner.jpeg"
				},
				{
					firstName: "Jody",
					lastName: "Friend",
					title: "Community Member",
					profileImg: "/static/images/profiles/jody_friend.jpg"
				},
				{
					firstName: "Pamela",
					lastName: "Harlan",
					title: "Community Member",
					profileImg: "/static/images/profiles/pamela_harlan.jpg"
				},
				{
					firstName: "Rachel",
					lastName: "Ivanyi",
					title: "Community Member",
					profileImg: "/static/images/profiles/rachel_Ivanyi.jpg"
				},
				{
					firstName: "LuAnn",
					lastName: "Haley",
					title: "Community Member",
					profileImg: "/static/images/profiles/luann_haley.jpg"
				},
				{
					firstName: "Michelle",
					lastName: "Morden",
					title: "Community Member",
					profileImg: "/static/images/profiles/michelle_morden.jpeg"
				},
				{
					firstName: "Gaurav",
					lastName: "Deshpande",
					title: "Community Member",
					profileImg: "/static/images/profiles/gaurav_deshpande.jpg"
				},
				{
					firstName: "Momoka",
					lastName: "Sugimura",
					title: "Student Representative",
					profileImg: "/static/images/profiles/momoka_sugimura.jpg"
				},
				{
					firstName: "Siyu",
					lastName: "Wang",
					title: "Student Representative",
					profileImg: "/static/images/profiles/siyu_wang.jpg"
				},
				{
					firstName: "Youhao",
					lastName: "Wei",
					title: "Technical Advisor",
					email: "youhaowei@ifriends.org",
					profileImg:
						"http://res.cloudinary.com/simpleview/image/upload/v1553790432/clients/simpleview/Youhao_Wei_81557218-47dc-4ae1-a41e-b10b70880b8e.jpg"
				},
				{
					firstName: "Sylvia",
					lastName: "Ahanonu",
					title: "ISS Liason",
					profileImg: "/static/images/profiles/sylvia_ahanonu.jpg"
				}
			]
		};
	}

	render() {
		const { banner, sections, eventColumns, events, boardMembers } = this.props;
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
					<Header title="Events" />
					<EventList columns={eventColumns} events={events} />
					<Header title="Board Members" />
					<BoardList members={boardMembers} />
				</Container>
			</MainLayout>
		);
	}
}
