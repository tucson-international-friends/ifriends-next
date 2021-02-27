import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import Header from "../components/Header";
import Testimonial from "../components/Testimonial";
import { getStorageMediaUrl } from "../lib/image";

export default class StudentsPage extends React.Component {
	static async getInitialProps() {
		return {
			banner: {
				message:
					"BECOME A FRIEND TO AN INTERNATIONAL STUDENT STUDYING IN TUCSON",
				image: getStorageMediaUrl("meet-student-banner.jpg")
			},
			sections: [
				{
					title: "BRUNA'S STORY",
					textAlign: "justify",
					content: `
My name is Bruna, and I first came to Tucson in 2014 to teach Portuguese language as a Fulbright Foreign Language Teaching Assistant. As I was going to spend only one academic year at the University of Arizona, International Friends appeared to be the perfect option to help me experience Tucson and American culture fully. My hosts Harold and Nancy welcomed me to their family and, since then, I have felt I have an important support outside my country, Brazil. With their company, I have witnessed beautiful events, such as the family’s Thanksgiving dinner, and visited important sites around Tucson, such as Catalina State Park (awesome for hiking!).

As it is so easy to fall in love with Tucson and the community, I decided to apply for a Ph.D. degree in Second Language Acquisition and Teaching to continue my studies in the University of Arizona and create more memories in Tucson. Fortunately, I was invited to be an IF Student Board Member for Fall 2016 and, since then, I have had the opportunity to collaborate with an amazing group of people. It is an honor to help organize events to enrich international students’ experience in the United States. This way, I would like to replicate all great memories of my first year in every new student’s heart living in Tucson.


I will take the liberty to thank all the Board Members and hosts in the name of the international students who had their lives touched and changed by the IF organization for their tireless effort in organizing so many cultural exchange opportunities.
`
				},
				{
					title: "ORGANIZED ACTIVITIES FOR STUDENTS AND HOSTS",
					content:
						"While most activities shared by hosts and students are planned by them on an individual basis, International Friends sponsors four formal group activities that all are welcome to attend.  We also organize one or two special events each semester, visiting local attractions such as the Arizona Sonora Desert Museum and the Biosphere.",
					headerAlign: "center",
					textAlign: "justify"
				},
				[
					{
						title: "FALL WELCOME LUNCHEON",
						content:
							"Before the beginning of the fall semester, International Friends hosts a lunch for incoming international students in conjunction with the University‘s orientation program. Attendees also include hosts and representatives from International Student Services, and volunteers bring and help prepare food. This is a great opportunity to meet the new students. While at the lunch, students are encouraged to sign up for an International Friends host.  The matching process begins after the lunch.",
						image: getStorageMediaUrl("welcome-luncheon.jpg")
					},
					{
						title: "FALL PICNIC",
						content:
							"International Friends sponsors a fall picnic, usually in late September, for students and hosts. Everyone on our email list is invited to come. We always need volunteers to welcome guests, contribute to the lunch buffet, and help with the activities.",
						image: getStorageMediaUrl("fall-fiesta.jpg")
					},
					{
						title: "SPRING WELCOME Brunch",
						content:
							"Before the spring semester begins, International Friends sponsors a brunch for incoming international students and hosts.  This meet-and-greet event is a great opportunity to welcome the new spring semester students.  While at the brunch, students are encouraged to sign up for an International Friends host. The matching process begins after the brunch.",
						image: getStorageMediaUrl("welcome-dinner.jpg")
					},
					{
						title: "RODEO PICNIC",
						content:
							"Each spring, International Friends hosts an annual Rodeo Picnic at about the time of the historic Tucson Rodeo. This event features a picnic for all students who have been involved in our activities during the year, their hosts, and other community friends. Traditionally held at Reid Park, this event features music, dancing, games, and food.",
						image: getStorageMediaUrl("spring-picnic.jpg")
					}
				]
			],
			testimonials: [
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
			]
		};
	}

	render() {
		const { banner, sections, testimonials } = this.props;
		return (
			<MainLayout>
				<Banner {...banner} />
				<Container>
					<Row>
						<Col md={4} xl={3} style={{ marginTop: "2em" }}>
							<Image style={{}} fluid rounded src={getStorageMediaUrl('bruna.jpg')} />
						</Col>
						<Col xl={9} md={8}>
							<TextBlock {...sections[0]} />
						</Col>
					</Row>
					<TextBlock {...sections[1]} />
					<ImageTextBlock {...sections[2][0]} invert />
					<ImageTextBlock {...sections[2][1]} color={COLORS.LIGHT} />
					<ImageTextBlock {...sections[2][2]} invert />
					<ImageTextBlock {...sections[2][3]} color={COLORS.LIGHT} />
					<Header
						className="mt-5 text-center py-5"
						title="WHAT OUR STUDENTS SAY..."
					/>
					<Row>
						{// eslint-disable-next-line react/no-array-index-key
							testimonials.map((testimonial, i) => (
								<Col key={i} className="mb-4" md={6}>
									<Testimonial {...testimonial} />
								</Col>
							))}
					</Row>
				</Container>
			</MainLayout>
		);
	}
}
