import React from "react";
import Container from "react-bootstrap/Container";

import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";

import { getStorageMediaUrl } from "../lib/image";

export const getStaticProps = () => ({
  props: {
    banner: {
      message: "Enjoy activities throughout the year",
      image: getStorageMediaUrl("meet-student-banner.jpg"),
    },
    sections: [
      {
        title: "ORGANIZED ACTIVITIES FOR STUDENTS AND HOSTS",
        content:
          "While most activities shared by hosts and students are planned by them on an individual basis, International Friends sponsors four formal group activities that all are welcome to attend.  We also organize one or two special events each semester, visiting local attractions such as the Arizona Sonora Desert Museum and Biosphere 2.",
        headerAlign: "center",
        textAlign: "justify",
      },
      [
        {
          title: "FALL WELCOME LUNCHEON",
          content:
            "Before the beginning of the fall semester, International Friends hosts a lunch for incoming international students in conjunction with the University‘s orientation program. Attendees also include hosts and representatives from International Student Services, and volunteers bring and help prepare food. This is a great opportunity to meet the new students. While at the lunch, students are encouraged to sign up for an International Friends host.  The matching process begins after the lunch.",
          image: "images/13939539_900880586683476_8821876700490256782_n.jpeg",
        },
        {
          title: "FALL PICNIC",
          content:
            "International Friends sponsors a fall picnic, usually in late September, for students and hosts. Everyone on our email list is invited to come. We always need volunteers to welcome guests, contribute to the lunch buffet, and help with the activities.",
          image: "images/10475610_354846071383228_7607311383060727136_o.jpeg",
        },
        {
          title: "SPRING WELCOME Brunch",
          content:
            "Before the spring semester begins, International Friends sponsors a brunch for incoming international students and hosts.  This meet-and-greet event is a great opportunity to welcome the new spring semester students.  While at the brunch, students are encouraged to sign up for an International Friends host. The matching process begins after the brunch.",
          image: "images/81514880_1572458986263849_3369518293160296448_n.jpeg",
        },
        {
          title: "RODEO PICNIC",
          content:
            "Each spring, International Friends hosts an annual Rodeo Picnic at about the time of the historic Tucson Rodeo. This event features a picnic for all students who have been involved in our activities during the year, their hosts, and other community friends. Traditionally held at Reid Park, this event features music, dancing, games, and food.",
          image: "/images/17.jpg",
        },
      ],
    ],
  },
});

const EventsPage = ({ banner, sections }) => (
  <MainLayout>
    <Banner {...banner} />
    <Container>
      <TextBlock {...sections[0]} />
      <ImageTextBlock {...sections[1][0]} invert />
      <ImageTextBlock {...sections[1][1]} color={COLORS.LIGHT} />
      <ImageTextBlock {...sections[1][2]} invert />
      <ImageTextBlock {...sections[1][3]} color={COLORS.LIGHT} />
    </Container>
  </MainLayout>
);

export default EventsPage;
