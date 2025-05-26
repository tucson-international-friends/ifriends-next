import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock, { VARIANTS } from "../components/TextBlock";
import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import { Container, Row, Col } from "react-bootstrap";
import { getLocalMediaUrl } from "../lib/image";

export const getStaticProps = async () => {
  return {
    props: {
      banner: {
        message: "EVERY STUDENT NEEDS A SENSE OF HOME",
        image: "/images/home_header1.jpeg",
        actions: [
          {
            type: "signup",
            label: "join us",
            size: "lg",
          },
        ],
      },
      sections: [
        // section 1
        [
          {
            title: "Who We Are",
            textAlign: "justify",
            content:
              "International Friends provides opportunities for international students and local hosts to develop close friendships and an understanding of and appreciation for each other's cultures. We offer activities through which international students may participate in the life of the community. ",
            actions: [
              {
                type: "readmore",
                href: "/about",
              },
            ],
          },
          {
            title: "What We Do",
            textAlign: "justify",
            content:
              "Our goal is simple but important.  We bring people together to share their cultures, interests, and life experiences.  Local hosts match with international students, and then meet at least once a month for one year.  International Friends is not a live-in hosting program, and we have no religious affiliation.  Participation is open to international students attending the University of Arizona and to Southern Arizona residents who serve as hosts.",
            actions: [
              {
                type: "readmore",
                href: "/about",
              },
            ],
          },
        ],
        // section 2
        [
          {
            title: "Why Become an International Friends Host",
            content: `
* Learn about other countries and cultures
* Participate in activities with interesting and eager students
* Help international students adjust to American culture
* Have fun!`,
            image: getLocalMediaUrl("pat_paul.png"),
            actions: [
              {
                type: "readmore",
                href: "/about",
              },
            ],
          },
          {
            title: "Why Do International Students Participate",
            image: getLocalMediaUrl(
              "46770484_10215442170621608_1860845059742629888_o.jpeg"
            ),
            content: `
* Learn about and more easily adjust to American culture
* Participate in the life of the Tucson community
* Share in sightseeing, dinners, and other activities with community individuals and families
* Have fun!
	`,
            actions: [
              {
                type: "readmore",
                href: "/about",
              },
            ],
          },
          {
            title: "WHAT IS EXPECTED OF HOSTS AND STUDENTS",
            content: `
* Commit to participate for one year
* Hosts and students contact each other within days of being matched
* Students and hosts get together at least once a month during the school year for activities that both would enjoy
* Hosts and students share ideas, customs, and cultures
* Follow the International Friends Guidelines for hosts and students`,
            actions: [
              {
                type: "readmore",
                href: "/guidelines",
              },
            ],
            image: getLocalMediaUrl(
              "46766821_1514707395339433_5267609408078086144_n.jpeg"
            ),
          },
          {
            title: "YOUR SUPPORT IS IMPORTANT!",
            image: getLocalMediaUrl("20190929_120315.jpg"),
            actions: [{ type: "donate" }],
            content: `
* Donate to support International Friends’ mission and our events, programs, and activities
* Help pay for event space rental costs, supplies, food for picnics, and other events
* Assist with website, listserv, marketing, and organizational costs
* Help defray the cost of printed materials, such as brochures, guidelines, newsletters, and banners
* Contribute to fund important situational expenses like a video for student orientations and a new PA system for events and activities
						`,
          },
        ],
        {
          title: "Get Involved",
          textAlign: "center",
          content: `
Make a “world of difference” in the lives of international students and local hosts. It’s fun, it’s easy, and it changes lives.`,
          actions: [
            {
              type: "signup",
              label: "join us",
              size: "lg",
            },
          ],
        },
      ],
    },
  };
};

const HomePage = ({ sections, banner }) => (
  <MainLayout>
    <Banner {...banner} />
    <Container>
      <Row>
        <Col md={6}>
          <TextBlock {...sections[0][0]} />
          <TextBlock {...sections[0][1]} />
        </Col>
        <Col md={6}>
          <div
            style={{ padding: "calc(2rem * 1.2 + 1rem + 0.83rem + 34px) 0" }}>
            <iframe
              className="embed-video"
              allow="autoplay"
              allowFullScreen=""
              src="https://arizona.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=06dd0cd1-402e-4042-bd61-abf8013f6212&amp;autoplay=false&amp;offerviewer=true&amp;showtitle=false&amp;showbrand=false&amp;start=0&amp;interactivity=all"
              style={{ width: "100%" }}
            />
          </div>
        </Col>
      </Row>
      <ImageTextBlock
        {...sections[1][0]}
        extraHeight
        invert
        color={COLORS.LIGHT}
      />
      <ImageTextBlock {...sections[1][1]} extraHeight />
      <ImageTextBlock
        {...sections[1][2]}
        extraHeight
        invert
        color={COLORS.LIGHT}
        buttonTitle={"Guidelines"}
      />
      <ImageTextBlock {...sections[1][3]} extraHeight />
      <TextBlock {...sections[2]} variant={VARIANTS.CALLOUT} />
    </Container>
  </MainLayout>
);

export default HomePage;
