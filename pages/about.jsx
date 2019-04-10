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

export default class About extends React.Component {
	static async getInitialProps() {
		return {
			banner: {
				message: "LEARN ABOUT EACH OTHER'S CULTURE",
				image: "/static/images/about-banner.jpg"
			},
			sections: [[
				{
					title: "Our History",
					textAlign: "justify",
					content: `
International Friends was founded in July 1952 by the wife of UA President Richard A. Harville and a group of other women from the local community. At the time, there were just 63 international students at the University. The fledgling group was first called Families for International Friendship. It grew slowly through the years, relying on small donations from a variety of local individuals and organizations.

International Friends became an Arizona corporation in February 2004 and also received official 501(c)(3) tax exempt status from the IRS. This—along with the support and encouragement of our students, community hosts, and Board members—provides a solid foundation for the future.`
				},
				{
					title: "Board Meetings",
					textAlign: "justify",
					content: `
Board Meetings are held five times a year to evaluate the program and plan events. Future initiatives and strategies are discussed at a Spring Planning Meeting. The Board is composed of students, Tucson hosts and a representative from the University of Arizona office of International Students. Anyone who is interested can become a member of one of the Committees of the Board, including Special Events, Fund Raising, and Public Relations. Often times committee members move on to the Board of Directors when a vacancy occurs on the Board. You can learn more about the board by visiting the links below.
`,
					actions: [{
						type: ACTIONS.READMORE,
						href: "/about/by-laws",
						label: "By Laws"
					}, {
						type: ACTIONS.READMORE,
						href: "/about/letter",
						label: "Chairperson Letter"
					}]
				},
			]],
			eventColumns: [{
				name: "date",
				label: "Date",
				format: FORMATS.DATE
			}, {
				name: "startDatetime",
				label: "Start Time",
				format: FORMATS.TIME
			}, {
				name: "endDatetime",
				label: "End Time",
				format: FORMATS.TIME
			}, {
				name: "name",
				label: "Event",
			}, {
				name: "location",
				label: "Location"
			}],
			events: [{
				name: "Board Planning Meeting",
				startDatetime: "2019-04-13 09:00",
				endDatetime: "2019-04-13 12:00",
				date: "2019-04-13",
				location: "St. Andrew's Church, 545 S. 5th Ave"
			}],
			boardMembers: [
				{
					firstName: "Patricia",
					lastName: "Gilman",
					title: "Co-Chair",
				}, {
					firstName: "Randy",
					lastName: "Spalding",
					title: "Co-Chair",
				}, {
					firstName: "Pam",
					lastName: "Obando",
					title: "Secretary",
				}, {
					firstName: "Robert",
					lastName: "Woerner",
					title: "Treasurer",
				}, {
					firstName: "Jody",
					lastName: "Friend",
					title: "Community Member",
				}, {
					firstName: "Doug",
					lastName: "Cline",
					title: "Community Member",
				}, {
					firstName: "LuAnn",
					lastName: "Haley",
					title: "Community Member",
				}, {
					firstName: "Michelle",
					lastName: "Morden",
					title: "Community Member",
				}, {
					firstName: "Momoka",
					lastName: "Sugimura",
					title: "Student Representative",
				}, {
					firstName: "Francisco",
					lastName: "Villegas",
					title: "Student Representative",
				}, {
					firstName: "Siyu",
					lastName: "Wang",
					title: "Student Representative",
				}, {
					firstName: "Youhao",
					lastName: "Wei",
					title: "Technical Advisor",
					email: "youhaowei@ifriends.org"
				}, {
					firstName: "Sylvia",
					lastName: "Ahanonu",
					title: "ISS Liason",
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
					<h2 className="text-center py-4">Upcomming Events</h2>
					<EventList columns={eventColumns} events={events} />
					<h2 className="text-center py-5">Board Members</h2>
					<BoardList members={boardMembers} />
				</Container>
			</MainLayout>
		);
	}
}
