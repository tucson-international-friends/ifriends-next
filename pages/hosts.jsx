import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import MainLayout from "../layout/main";
import { ACTIONS } from "../components/Action";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import Header from "../components/Header";
import { FAQList } from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import Signup from "../components/Action/signup";

export default class HostPage extends React.Component {
	static async getInitialProps() {
		return {
			banner: {
				message: "BUILD LASTING FRIENDSHIPS",
				image: "/static/images/host-student-banner.jpg"
			},
			sections: [
				[
					{
						title: "A TYPICAL YEAR",
						headerAlign: "center",
						textAlign: "justify",
						content: `
International Friends sponsors a “welcome” event each August and January for new students and hosts.  At these events, we describe our program and invite International students to apply to be matched with local hosts. 

Students and hosts are encouraged to get together once a month or more.  Activities can range from special events like holiday celebrations, sightseeing trips, and hiking outings, to everyday activities like shopping and sharing meals.  International Friends also organizes picnics and other fun events during the school year that all are welcome to attend.

While the students’ and hosts’ matched relationships officially end after the first academic year, lifelong friendships and connections are often formed with hosts, students, and the students’ families back home. Many have found their lives immeasurably enriched by these friendships.
`
					}
				],
				[
					{
						title: "LIFE-LONG FRIENDSHIPS ARE FORMED",
						image: "./static/images/halloween.jpg",
						content: `
International students describe International Friends as an invaluable asset for learning about American life outside the academic environment. Southern Arizonans who have hosted students have expressed tremendous gratitude for the pleasure these relationships bring, and the goodwill generated affects both students and hosts for the rest of their lives.
`,
						action: [
							{
								type: ACTIONS.SIGNUP,
								label: "Apply to Host"
							}
						]
					},
					{
						title: "HOW HOSTING WORKS",
						image: "/static/images/cooking2.jpg",
						content: `
Students and hosts are matched for one academic year. Although the relationships may continue well beyond this time period, we hope hosts will make themselves available for matching to other first-year students in upcoming years.

Any student inquiries regarding the following should be referred to the University of Arizona’s International Student Services office at 520 621-4627:
* Employment instructions
* Immigration and visa issues
* Academic problems with professors, advisors and administrators
* Financial problems
* Major medical problems`,
						actions: [
							{
								type: ACTIONS.READMORE,
								href: "/guidelines"
							}
						]
					}
				]
			],
			faqs: [
				{
					question: "Who belongs to International Friends?",
					answer: `
* **STUDENTS** - Any international student enrolled at the University of Arizona may choose to participate. Preference is given to students in their first year of study.
* **HOSTS** - Anyone in the Southern Arizona area who is interested in international friendship and is willing to exchange customs and ideas with an international student can apply.`
				},
				{
					question: " Why do students participate?",
					answer: `
* To become better acquainted with Americans on a personal basis
* To learn about the many cultures and ways of life in Tucson and Southern Arizona
* To share their own cultures and customs
* To participate in the life of the Tucson community`
				},
				{
					question: "Why do Hosts participate?",
					answer: `
* To become better acquainted with international students on a personal basis
* To learn about others’ cultures and ways of life
* To share their own cultures and customs
* To participate in the lives of international students in Tucson`
				},
				{
					question: "WHO COORDINATES ACTIVITIES AND HOW DO I LEARN ABOUT THEM?",
					answer: `
International Friends has a governing body, the Board of Directors, composed of past and present hosts, graduate and undergraduate international students, and a representative from [International Student Services](http://internationalstudents.arizona.edu/). The Board organizes and coordinates International Friends activities. 

Information about group activities and other items of interest are communicated through International Friends emails and website.
`
				},
				{
					question: "WHAT IS REQUIRED OF An international friends HOST?",
					answer: `
* Complete application and be approved as a host
* Contact student within one week of being matched 
* Continue monthly contact the first year the student is here. Plan to have a meal together, participate in community events, go sightseeing, attend International Friends activities, or just share coffee and conversation`
				},
				{
					question: "WHAT IS REQUIRED OF An international friends STUDENT?",
					answer: `
* Complete application for matching with hosts
* Communicate with your host within one week of matching assignment 
* Invite your host to get together with you and your friends, or just invite them for coffee
* Share information about your country, family, and traditions `
				},
				{
					question: "IS THERE A COST TO BECOME A MEMBER?",
					answer:
						"There is no fee associated with International Friends.  We are a 501(c)(3) organization, and donations in support are always welcome."
				},
				{
					question: "Is it possible to host more than one student?",
					answer:
						"Yes!  Many International Friends hosts request being matched with two or three students, and some even host more."
				}
			],
			testimonials: [
				{
					quote:
						"“Serving as a host with International Friends has enriched my life and broadened my horizons immeasurably. It is a real joy to interact with bright, energetic young people from widely divergent cultures and to learn firsthand about the fascinating world we live in.”",
					from: "Robert Woerner, Host"
				},
				{
					quote:
						"“We have been involved with hosting international students for about 15 years. It has been such a fun and enriching time for us that I can’t imagine why everyone would not want to participate in the experience!”",
					from: "Deanne & Bill Lesley, Hosts"
				},
				{
					quote:
						"“We are relatively new to International Friends and enjoying it tremendously. Our Chinese student has been with us for a year and we can already see him growing and maturing. He provides a connection to the university, as well as to the world. It takes so little to host that it seems like everyone would want a student.”",
					from: "Holly & Michael Berryhill, Hosts"
				},
				{
					quote:
						"“My student and I have explored the beautiful mountain canyons and desert trails surrounding Tucson. More importantly, we started learning about our unique backgrounds and experiences. I was able to help him with the transition to life in America and he has enriched my life by becoming part of my family.”",
					from: "George Binder, Host"
				}
			]
		};
	}

	render() {
		const { banner, sections, faqs, testimonials } = this.props;
		return (
			<MainLayout>
				<Banner {...banner} />
				<Container>
					<Row>
						<Col md={12}>
							<TextBlock {...sections[0][0]} />
						</Col>
					</Row>
					<Header title="Frequently Asked Questions" />
					<FAQList data={faqs} />
					<ImageTextBlock {...sections[1][0]} color={COLORS.LIGHT} invert />
					<ImageTextBlock {...sections[1][1]} />

					<Header
						className="mt-5 text-center py-5"
						title="WHAT OUR HOSTS SAY..."
					/>
					<Row>
						{// eslint-disable-next-line react/no-array-index-key
							testimonials.map((testimonial, i) => (
								<Col key={i} className="mb-4" md={6}>
									<Testimonial {...testimonial} />
								</Col>
							))}
					</Row>
					<div className="text-center py-5 mb-5">
						<Signup size="lg" label="join us today" />
					</div>
				</Container>
			</MainLayout>
		);
	}
}
