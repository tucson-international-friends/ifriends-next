import React from "react";
import Container from "react-bootstrap/Container";

import ImageTextBlock, { COLORS } from "../components/ImageTextBlock";
import MainLayout from "../layout/main";
import Banner from "../components/Banner";
import TextBlock from "../components/TextBlock";
import notion from "../lib/notion";
import { getStorageMediaUrl } from "../lib/image";
import Header from "../components/Header";
import EventList from "../components/Events/List";

const eventDatabaseId = "bbb168dc0a1244dfbc7a3e8b9f5eed0c";

const getEventWhen = (start, end) => {
  if (!start) {
    return "TBA";
  }
  const startDate = new Date(start);
  if (!end) {
    return `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString}`;
  }
  const endDate = new Date(end);
  if (startDate.toLocaleDateString() === endDate.toLocaleDateString()) {
    return `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString(
      [],
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    )} - ${endDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }
  return "TBA";
  return `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })} - ${endDate.toLocaleDateString()}
 ${endDate.toLocaleTimeString([], {
   hour: "2-digit",
   minute: "2-digit",
 })}`;
};

export const getStaticProps = async () => {
  const events = null;
  return {
    revalidate: 60,
    props: {
      events,
      banner: {
        message: "Enjoy activities throughout the year",
        image: "/images/activities_header.png",
      },
      sections: [
        {
          title: "ORGANIZED ACTIVITIES FOR STUDENTS AND HOSTS",
          content:
            "While most activities shared by hosts and students are planned by them on an individual basis, International Friends sponsors two yearly group activities that all are welcome to attend.  We also organize one or two special events each semester, visiting local attractions such as the Southern Arizona Heritage and Visitor Center, the Biosphere, and the Arizona Sonora Desert Museum.",
          headerAlign: "center",
          textAlign: "justify",
        },
        [
          {
            title: "FALL PICNIC",
            content:
              "International Friends sponsors a fall picnic, usually in late September, for students and hosts. Everyone on our email list is invited to come.",
            image: "images/10475610_354846071383228_7607311383060727136_o.jpeg",
          },
          {
            title: "NEW HOST ORIENTATIONS",
            content:
              "At the beginning of each semester, International Friends offers an orientation for new hosts to both inform and answer questions.",
            image:
              "images/81514880_1572458986263849_3369518293160296448_n.jpeg",
          },
          {
            title: "RODEO PICNIC",
            content:
              "In the Spring, International Friends holds an annual Rodeo Picnic at about the time of the historic Tucson Rodeo for all IF students and their hosts.  Traditionally held at Reid Park, the picnic features music, dancing, games, food, and fun!",
            image: "/images/activities_image2.png",
          },
        ],
      ],
    },
  };
};

const EventsPage = ({ banner, sections, events }) => (
  <MainLayout>
    <Banner {...banner} />
    <Container>
      <TextBlock {...sections[0]} />
      <ImageTextBlock {...sections[1][0]} color={COLORS.LIGHT} />
      <ImageTextBlock {...sections[1][1]} invert />
      <ImageTextBlock {...sections[1][2]} color={COLORS.LIGHT} />
    </Container>
  </MainLayout>
);

export default EventsPage;
