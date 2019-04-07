import React from "react";

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
					content: `
International Friends was founded in July 1952 by the wife of UA President Richard A. Harville and a group of other women from the local community. At the time, there were just 63 international students at the University. The fledgling group was first called Families for International Friendship. It grew slowly through the years, relying on small donations from a variety of local individuals and organizations.

International Friends became an Arizona corporation in February 2004 and also received official 501(c)(3) tax exempt status from the IRS.This—along with the support and encouragement of our students, community hosts, and Board members—provides a solid foundation for the future.`
				},
				{
					title: "Board Meetings",
					content: `
Board Meetings are held five times a year to evaluate the program and plan events. Future initiatives and strategies are discussed at a Spring Planning Meeting. The Board is composed of students, Tucson hosts and a representative from the University of Arizona office of International Students. Anyone who is interested can become a member of one of the Committees of the Board, including Special Events, Fund Raising, and Public Relations. Often times committee members move on to the Board of Directors when a vacancy occurs on the Board. You can learn more about the board by visiting the links below.
`
				}
			]]
		};
	}
}
