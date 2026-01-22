import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/hero-banner";
import { TextBlock } from "@/components/sections/text-block";
import { ImageTextBlock } from "@/components/sections/image-text-block";

export const metadata: Metadata = {
  title: "Activities",
  description:
    "Explore International Friends activities including our Fall Picnic, Rodeo Picnic, new host orientations, and special events throughout the year.",
};

export default function ActivitiesPage() {
  return (
    <>
      <HeroBanner
        title="Enjoy Activities Throughout the Year"
        imageSrc="/images/activities_header.png"
        imagePosition="top"
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide">
          <TextBlock
            title="Organized Activities for Students and Hosts"
            content="While most activities shared by hosts and students are planned by them on an individual basis, International Friends sponsors two yearly group activities that all are welcome to attend. We also organize one or two special events each semester, visiting local attractions such as the Southern Arizona Heritage and Visitor Center, the Biosphere, and the Arizona Sonora Desert Museum."
            align="center"
          />
        </div>
      </section>

      <ImageTextBlock
        title="Fall Picnic"
        content="International Friends sponsors a fall picnic, usually in late September, for students and hosts. Everyone on our email list is invited to come."
        imageSrc="/images/10475610_354846071383228_7607311383060727136_o.jpeg"
        variant="light"
      />

      <ImageTextBlock
        title="New Host Orientations"
        content="At the beginning of each semester, International Friends offers an orientation for new hosts to both inform and answer questions."
        imageSrc="/images/81514880_1572458986263849_3369518293160296448_n.jpeg"
        invert
      />

      <ImageTextBlock
        title="Rodeo Picnic"
        content="In the Spring, International Friends holds an annual Rodeo Picnic at about the time of the historic Tucson Rodeo for all IF students and their hosts. Traditionally held at Reid Park, the picnic features music, dancing, games, food, and fun!"
        imageSrc="/images/activities_image2.png"
        variant="light"
      />
    </>
  );
}
