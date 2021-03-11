import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { FORMATS } from "../lib/common/format";

import MainLayout from "../layout/main";
import { ACTIONS } from "../components/Action";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import EventList from "../components/Events/List";
import BoardList from "../components/BoardList";
import Header from "../components/Header";
import { getStorageMediaUrl } from "../lib/image";
import Testimonial from "../components/Testimonial";

export const getStaticProps = async () => {
	return {
		props: {
			banner: {
				message: "LEARN ABOUT EACH OTHER'S CULTURE",
				image: getStorageMediaUrl('about-banner.jpg')
			},
			sections: [
				[
					{
						title: "Our History",
						textAlign: "justify",
						content: `International Friends was founded in 1952 by George Lee Garner Harvill, wife of University of Arizona President Richard A. Harvill, and a group of women from Tucson. At the time, there were just 63 international students at the University. The fledgling group was first called Families for International Friendship. The organization grew slowly through the years, relying on small donations from a variety of local individuals and organizations.

International Friends became an Arizona corporation in 2004 and also received official 501(c)(3) tax- exempt status from the IRS. This, along with the support and encouragement of international students, community hosts, and board members, provides a solid foundation for the future.`
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
					name: "Biosphere Tour",
					date: "2019-10-20",
					startDatetime: "2019-10-20 13:45",
					location: "Biosphere 2"
				},
				{
					name: "Amerind Fall Festival",
					date: "2019-10-26",
					startDatetime: "2019-10-26 10:00",
					endDatetime: "2019-10-26 04:00"
				},
				{
					name: "International Students Talent Show",
					date: "2019-11-12",
					startDatetime: "2019-11-12 19:00",
					endDatetime: "2019-11-12 21:00",
					location: "Stevie Eller Dance Theater",
					url: "https://global.arizona.edu/events/global-wildcats-got-talent-8"
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
					date: "2020-02-23",
					startDatetime: "2020-02-23 12:00",
					endDatetime: "2020-02-23 14:00",
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
					profileImg: "profiles/patricia_gilman.jpg"
				},
				{
					firstName: "Randy",
					lastName: "Spalding",
					title: "Co-Chair",
					profileImg: "profiles/randy_spalding.jpeg"
				},
				{
					firstName: "Pam",
					lastName: "Obando",
					title: "Secretary",
					profileImg: "profiles/pam_obando.jpg"
				},
				{
					firstName: "Robert",
					lastName: "Woerner",
					title: "Treasurer",
					profileImg: "profiles/robert_woerner.jpeg"
				},
				{
					firstName: "Jody",
					lastName: "Friend",
					title: "Community Member",
					profileImg: "profiles/jody_friend.jpg"
				},
				{
					firstName: "Pamela",
					lastName: "Harlan",
					title: "Community Member",
					profileImg: "profiles/pamela_harlan.jpg"
				},
				{
					firstName: "Rachel",
					lastName: "Ivanyi",
					title: "Community Member",
					profileImg: "profiles/rachel_Ivanyi.jpg"
				},
				{
					firstName: "LuAnn",
					lastName: "Haley",
					title: "Community Member",
					profileImg: "profiles/luann_haley.jpg"
				},
				{
					firstName: "Michelle",
					lastName: "Morden",
					title: "Community Member",
					profileImg: "profiles/michelle_morden.jpeg"
				},
				{
					firstName: "Gaurav",
					lastName: "Deshpande",
					title: "Community Member",
					profileImg: "profiles/gaurav_deshpande.jpg"
				},
				{
					firstName: "Momoka",
					lastName: "Sugimura",
					title: "Student Representative",
					profileImg: "profiles/momoka_sugimura.jpg"
				},
				{
					firstName: "Ye",
					lastName: "Zhang",
					title: "Student Representative",
					profileImg: "profiles/ye_zhang.jpg"
				},
				{
					firstName: "Francisco",
					lastName: " Villegas",
					title: "Student Representative",
					profileImg: "profiles/francisco_villegas.jpg"
				},
				{
					firstName: "Youhao",
					lastName: "Wei",
					title: "Technical Advisor",
					email: "youhaowei@ifriends.org",
					profileImg:
						"profiles/youhao_wei.jpg"
				},
				{
					firstName: "Sylvia",
					lastName: "Ahanonu",
					title: "ISS Liason",
					profileImg: "profiles/sylvia_ahanonu.jpg"
				}
			],
			previousMembers: [{
				firstName: "Siyu",
				lastName: "Wang",
				title: "Student Representative",
				profileImg: "profiles/siyu_wang.jpg"
			}],
			studentTestimonials: [
				{
					quote:
						"“I had a good time at the UA and in Tucson, but the best experience was with my International Friends family. In fact, it was like family away from home. I recommend International Friends for all international students!”",
					from: "Francis Abugbilla, Ghana"
				},
				{
					quote:
						"“Where to start….New country….New environment…New culture…New people…away from family…but here in University of Arizona you got International Friends…a family...home away from home…hosts you can count on…understand new culture in better way.”",
					from: "Amanjot Kaur Gill, India"
				},
				{
					quote:
						"“Sometimes my host cooked some American meal for me and sometimes I cooked some Korean food for him. We talked and shared cultural things about both countries. I learned so many things about the culture of the US from him. He always let me know about the idioms that I am not familiar with but anxious to learn about, such as “play it by ear” and “wiggle room.”",
					from: "Hyunwoong Chang, Korea"
				},
				{
					quote:
						"“When I came I wanted to know more about Tucson and the people who stay here. Moreover, I wanted a friend/mentor who can guide me. Throughout the year, I have seen many parts of Arizona with my hosts, eaten different types of cuisine and most importantly got to hear their stories of world travel. Hearing about their experiences inspires me to do a world trip.”",
					from: "Rohan Gupta, India"
				}
			],
			hostTestimonials: [
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
			],
			studentStories: [{
				title: "BRUNA'S STORY",
				textAlign: "justify",
				content: `
My name is Bruna, and I first came to Tucson in 2014 to teach Portuguese language as a Fulbright Foreign Language Teaching Assistant. As I was going to spend only one academic year at the University of Arizona, International Friends appeared to be the perfect option to help me experience Tucson and American culture fully. My hosts Harold and Nancy welcomed me to their family and, since then, I have felt I have an important support outside my country, Brazil. With their company, I have witnessed beautiful events, such as the family’s Thanksgiving dinner, and visited important sites around Tucson, such as Catalina State Park (awesome for hiking!).

As it is so easy to fall in love with Tucson and the community, I decided to apply for a Ph.D. degree in Second Language Acquisition and Teaching to continue my studies in the University of Arizona and create more memories in Tucson. Fortunately, I was invited to be an IF Student Board Member for Fall 2016 and, since then, I have had the opportunity to collaborate with an amazing group of people. It is an honor to help organize events to enrich international students’ experience in the United States. This way, I would like to replicate all great memories of my first year in every new student’s heart living in Tucson.


I will take the liberty to thank all the Board Members and hosts in the name of the international students who had their lives touched and changed by the IF organization for their tireless effort in organizing so many cultural exchange opportunities.
`
			}, {
				title: "SOMEONE ELSE's Story",
				content: `segw`
			}]
		}
	};
};

const AboutPage = ({ banner, sections, studentTestimonials, hostTestimonials, studentStories, eventColumns, events, boardMembers, previousMembers }) => {
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

				<Header
					className="mt-5 text-center py-5"
					title="WHAT OUR STUDENTS SAY"
				/>
				<Row>
					{// eslint-disable-next-line react/no-array-index-key
						studentTestimonials.map((testimonial, i) => (
							<Col key={i} className="mb-4" md={6}>
								<Testimonial {...testimonial} />
							</Col>
						))}
				</Row>

				<Header
					className="mt-5 text-center py-5"
					title="WHAT OUR HOSTS SAY"
				/>
				<Row>
					{// eslint-disable-next-line react/no-array-index-key
						hostTestimonials.map((testimonial, i) => (
							<Col key={i} className="mb-4" md={6}>
								<Testimonial {...testimonial} />
							</Col>
						))}
				</Row>

				<Row>
					<Col md={4} xl={3} style={{ marginTop: "2em" }}>
						<Image style={{}} fluid rounded src={getStorageMediaUrl('bruna.jpg')} />
					</Col>
					<Col xl={9} md={8}>
						<TextBlock {...studentStories[0]} />
					</Col>


					<Col md={4} xl={3} style={{ marginTop: "2em" }}>
						<Image style={{}} fluid rounded src={getStorageMediaUrl('bruna.jpg')} />
					</Col>
					<Col xl={9} md={8}>
						<TextBlock {...studentStories[0]} />
					</Col>
				</Row>


				{
					// caledanr can be added back after planning meeting
					// <Header title="Events" />
					//<EventList columns={eventColumns} events={events} />
				}
				<Header title="Current Board Members" />
				<p>The all-volunteer board is composed of past and present hosts, international students, and an ex-officio representative from the UA International Student Services office. Board meetings are held five times a year to evaluate the program and plan events.</p>
				<BoardList members={boardMembers} />

				<Header title="Previous Members" />
				<BoardList members={previousMembers} />


			</Container>
		</MainLayout>
	);
};

export default AboutPage;
