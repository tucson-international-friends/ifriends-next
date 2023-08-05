import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import BoardList from "../components/BoardList";
import Header from "../components/Header";
import { getStorageMediaUrl, getLocalMediaUrl } from "../lib/image";
import Testimonial from "../components/Testimonial";
import notion from "../lib/notion";

const memberDatabaseId = "e27149a4729a468c822f1b799ce69e09";

export const getServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=300",
  );

  const notionRes = await notion.databases.query({
    database_id: memberDatabaseId,
    sorts: [
      {
        property: "Title",
        direction: "ascending",
      },
      {
        property: "Name",
        direction: "ascending",
      },
    ],
  });
  const members = notionRes.results.map((page) => {
    const member = page.properties;
    const name = member.Name.title[0].plain_text;
    return {
      name,
      profileUrl:
        member["Profile Picture"].files?.[0]?.file.url ??
        `https://ui-avatars.com/api/?name=${name.replace(" ", "+")}&size=200`,
      title: member.Title.select.name,
      current: member.Current.checkbox,
    };
  });

  return {
    props: {
      members,
      banner: {
        message: "LEARN ABOUT EACH OTHER'S CULTURE",
        image: getStorageMediaUrl("about-banner.jpg"),
      },
      sections: [
        [
          {
            title: "Our History",
            textAlign: "justify",
            content: `International Friends was founded in 1952 by George Lee Garner Harvill, wife of University of Arizona President Richard A. Harvill, and a group of women from Tucson. At the time, there were just 63 international students at the University. The fledgling group was first called Families for International Friendship. The organization grew slowly through the years, relying on small donations from a variety of local individuals and organizations.

International Friends became an Arizona corporation in 2004 and also received official 501(c)(3) tax- exempt status from the IRS. This, along with the support and encouragement of international students, community hosts, and board members, provides a solid foundation for the future.`,
          },
          {
            title: "A TYPICAL YEAR",
            headerAlign: "center",
            textAlign: "justify",
            content: `
International Friends sponsors a “welcome” event each August and January for new students and hosts. At these events, we describe our program and invite international students to apply to be matched with local hosts.

Students and hosts are encouraged to get together once a month or more. Activities can range from special events like holiday celebrations, sightseeing trips, and hiking outings, to everyday activities like shopping and sharing meals. International Friends also organizes picnics and other fun events during the school year that all are welcome to attend.

While the students’ and hosts’ matched relationships officially end after the first academic year, lifelong friendships and connections are often formed with hosts, students, and the students’ families back home. Many have found their lives immeasurably enriched by these friendships.`,
          },
        ],
        {
          textAlign: "justify",
          content: `
The all-volunteer board is composed of past and present hosts, international students, and an ex-officio representative from the UA International Student Services office. Board meetings are held five times a year to evaluate the program and plan events. 
`,
          actions: [
            {
              type: "readmore",
              href: "/by-laws",
              label: "By Laws",
            },
            {
              type: "readmore",
              href: "/letter",
              label: "Letter from Co-Chairs",
            },
          ],
        },
      ],
      studentTestimonials: [
        {
          quote:
            "“I had a good time at the UA and in Tucson, but the best experience was with my International Friends family. In fact, it was like family away from home. I recommend International Friends for all international students!”",
          from: "Francis Abugbilla, Ghana",
        },
        {
          quote:
            "“Where to start….New country….New environment…New culture…New people…away from family…but here in University of Arizona you got International Friends…a family...home away from home…hosts you can count on…understand new culture in better way.”",
          from: "Amanjot Kaur Gill, India",
        },
        {
          quote:
            "“Sometimes my host cooked some American meal for me and sometimes I cooked some Korean food for him. We talked and shared cultural things about both countries. I learned so many things about the culture of the US from him. He always let me know about the idioms that I am not familiar with but anxious to learn about, such as “play it by ear” and “wiggle room.”",
          from: "Hyunwoong Chang, Korea",
        },
        {
          quote:
            "“When I came I wanted to know more about Tucson and the people who stay here. Moreover, I wanted a friend/mentor who can guide me. Throughout the year, I have seen many parts of Arizona with my hosts, eaten different types of cuisine and most importantly got to hear their stories of world travel. Hearing about their experiences inspires me to do a world trip.”",
          from: "Rohan Gupta, India",
        },
      ],
      hostTestimonials: [
        {
          quote:
            "“Serving as a host with International Friends has enriched my life and broadened my horizons immeasurably. It is a real joy to interact with bright, energetic young people from widely divergent cultures and to learn firsthand about the fascinating world we live in.”",
          from: "Robert Woerner, Host",
        },
        {
          quote:
            "“We have been involved with hosting international students for about 15 years. It has been such a fun and enriching time for us that I can’t imagine why everyone would not want to participate in the experience!”",
          from: "Deanne & Bill Lesley, Hosts",
        },
        {
          quote:
            "“We are relatively new to International Friends and enjoying it tremendously. Our Chinese student has been with us for a year and we can already see him growing and maturing. He provides a connection to the university, as well as to the world. It takes so little to host that it seems like everyone would want a student.”",
          from: "Holly & Michael Berryhill, Hosts",
        },
        {
          quote:
            "“My student and I have explored the beautiful mountain canyons and desert trails surrounding Tucson. More importantly, we started learning about our unique backgrounds and experiences. I was able to help him with the transition to life in America and he has enriched my life by becoming part of my family.”",
          from: "George Binder, Host",
        },
      ],
      studentStories: [
        {
          title: "MOMOKA SUGIMURA",
          textAlign: "justify",
          content: `
Hi! I’m Momoka from Tokyo, Japan. I’m pursuing my bachelor’s degree in Optical Sciences at the University of Arizona with an aspiration to become an engineer who works globally towards developing eco-friendly technology. 

Coming to Tucson by myself was exciting but frightening even though I had the experience of living in the US for a year as a high school exchange student. In the first few weeks in Tucson, I was randomly attending events around the campus area, hoping to make friends. Then, I got to know that there would be an event that includes free food close to campus, which happened to be the welcome luncheon for International Friends. I went there without really knowing what that is for. But going there and getting involved with International Friends was one of the best decisions I made since I came to Tucson. At the luncheon, I met many wonderful welcoming hosts and also international students who were just like me, trying to create a network in Tucson. But, most importantly, I met my host (Jack and Virginia Wyly). They always make sure that we feel welcomed and never lonely. Especially during the holiday seasons, they invite us over to their house and have dinner together. It is very heartwarming to have someone and a place you feel welcomed, especially in a place far from your actual home. 

I’m glad that I joined International Friends and met many people along the way. I hope other international students will feel the same way, too
`,
        },
        {
          title: "GAURAV DESHPANDE",
          content: `Hi Everyone! I’m Gaurav Deshpande. I joined International Friends when I came to The University of Arizona to pursue a Masters degree in Management Information Systems. Since then my hosts, Paul and Pat, and all the other friends I made at International Friends, have become an important and fun part of this new life that I am building here in the United States.

The first time I heard about International Friends was during the orientation in my first week in Tucson. The promise of a chance to meet people from other cultures and backgrounds and free food drove me to attend the Welcome Lunch the following weekend. I remember being surprised by how friendly and welcoming everyone was, and how genuinely curious they were to know more about my country. 

It’s been a fantastic journey with Paul and Pat as my hosts and the other students they are hosting. The trips we’ve taken around Tucson, to various events, parks, and places to visit have been a highlight of my time here and have given me a better sense of living in this city and experiencing it, as opposed to just attending the University. They’ve also been a large part of some of the milestones of my time here, from advising me when I was going to buy my first car here, to attending my graduation with my family from India, and helping me move from my university apartment.

The thing that I love most about International Friends is that it provides us, as students from different countries and cultures, with an informal and comfortable space to ask questions about American culture and ways of doing things we don’t understand and haven’t experienced before, or that may seem too silly to ask a peer or faculty at the University.

When we join the University of Arizona, for most of us, it’s the first time that we are living in another country and for some, it can even be the first time that they are living away from their family and friends. The hosts are one of the best resources we have for support during this period of transition. It’s also one of the best places to meet and interact with people outside of our field of study, from different countries, with different backgrounds and unique perspectives.

Joining International Friends has been one of the best decisions that I’ve made. It has not only given me great friends for life but has also made my experience here richer and a lot more fun. I look forward to many more fun conversations, good food, and milestones together.`,
        },
      ],
    },
  };
};

const AboutPage = ({
  banner,
  sections,
  studentTestimonials,
  hostTestimonials,
  studentStories,
  members,
}) => {
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

        <h1 className="text-center">Meet Our Students</h1>
        <Row>
          <Col md={4} xl={3} style={{ marginTop: "2em" }}>
            <Image
              alt="momoka"
              style={{}}
              fluid
              rounded
              src={getLocalMediaUrl("momoka.jpg")}
            />
          </Col>
          <Col xl={9} md={8}>
            <TextBlock {...studentStories[0]} />
          </Col>

          <Col md={4} xl={3} style={{ marginTop: "2em" }}>
            <Image
              alt="gaurav"
              style={{}}
              fluid
              rounded
              src={getLocalMediaUrl("gaurav_deshpande-2.jpg")}
            />
          </Col>
          <Col xl={9} md={8}>
            <TextBlock {...studentStories[1]} />
          </Col>
        </Row>

        <Header
          className="mt-5 text-center py-5"
          title="WHAT OUR STUDENTS SAY"
        />
        <Row>
          {
            // eslint-disable-next-line react/no-array-index-key
            studentTestimonials.map((testimonial, i) => (
              <Col key={i} className="mb-4" md={6}>
                <Testimonial {...testimonial} />
              </Col>
            ))
          }
        </Row>

        <Header className="mt-5 text-center py-5" title="WHAT OUR HOSTS SAY" />
        <Row>
          {
            // eslint-disable-next-line react/no-array-index-key
            hostTestimonials.map((testimonial, i) => (
              <Col key={i} className="mb-4" md={6}>
                <Testimonial {...testimonial} />
              </Col>
            ))
          }
        </Row>

        {
          // caledanr can be added back after planning meeting
          // <Header title="Events" />
          //<EventList columns={eventColumns} events={events} />
        }
        <h1 className="text-center">INTERNATIONAL FRIENDS BOARD</h1>
        <TextBlock textAlign="center" {...sections[1]} />

        <Header title="Current Board Members" />

        <BoardList members={members.filter((member) => member.current)} />

        <Header title="Previous Members" />
        <BoardList members={members.filter((member) => !member.current)} />
      </Container>
    </MainLayout>
  );
};

export default AboutPage;
