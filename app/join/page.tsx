import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/hero-banner";
import { TextBlock } from "@/components/sections/text-block";
import { ImageTextBlock } from "@/components/sections/image-text-block";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Become a host or student member of International Friends. Learn how to apply and read FAQs about our cultural exchange program.",
};

const faqs = [
  {
    question: "Who belongs to International Friends?",
    answer: `
**STUDENTS** - Any international student enrolled at the University of Arizona may choose to participate.

**HOSTS** - Anyone in the Southern Arizona area who is interested in international friendship and is willing to exchange customs and ideas with an international student can apply. All applicants must provide current references.`,
  },
  {
    question: "Why do students participate?",
    answer: `
* To become better acquainted with Americans on a personal basis.
* To learn about the many cultures and ways of life in Tucson and Southern Arizona.
* To share their own cultures and customs.
* To participate in the life of the Tucson community.`,
  },
  {
    question: "Why do Hosts participate?",
    answer: `
* To become better acquainted with international students on a personal basis.
* To learn about others' cultures and ways of life.
* To share their own cultures and customs.
* To participate in the lives of international students in Tucson.`,
  },
  {
    question: "Who coordinates activities and how do I learn about them?",
    answer: `
International Friends is governed by a volunteer board of directors composed of past and present hosts, graduate and undergraduate international students, and a representative from [International Student Services](http://internationalstudents.arizona.edu/). The Board organizes and coordinates International Friends activities.

Information about group activities and other items of interest are communicated through International Friends emails and website.`,
  },
  {
    question: "What is required of an International Friends host?",
    answer: `
* Complete application and be approved as a host.
* Contact student within days of being matched.
* Continue monthly contact for one year. Plan to have a meal together, participate in community events, go sightseeing, attend International Friends activities, or just share coffee and conversation.
* Follow the International Friends Guidelines for hosts.`,
  },
  {
    question: "What is required of an International Friends student?",
    answer: `
* Complete application for matching with hosts.
* Communicate with your host within days of being matched.
* Invite your host to get together with you and your friends, or just invite them for coffee.
* Share information about your country, family, and traditions.
* Follow the International Friends Guidelines for students.`,
  },
  {
    question: "Is there a cost to become a member?",
    answer:
      "There is no fee associated with International Friends. We are a 501(c)(3) organization, and donations in support are always welcome.",
  },
  {
    question: "Is it possible to host more than one student?",
    answer:
      "Yes! Many International Friends hosts request being matched with two or three students, and some even host more.",
  },
];

export default function JoinPage() {
  return (
    <>
      <HeroBanner
        title="Build Lasting Friendships"
        imageSrc="/images/join_header.png"
        imagePosition="top"
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <TextBlock
              title="For Hosts"
              content={`
* Read and review the IF Guidelines.
* Click on the "Host Application" button.
* Fill out and submit the application online.
* Your references will be checked, so provide current information. Please inform your references that they will be contacted by International Friends.
* Upon approval, you will be added to our database and then be given access to our list of students available for matching.`}
            />
            <TextBlock
              title="For Students"
              content={`
* Read and review the IF Guidelines.
* Click on the "Student Application" button application.
* Complete and submit the application, answering every question. The more information you can provide about yourself, the easier it is to match you with a host having similar interests.
* You will be matched with a community host as soon as possible.`}
            />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <ImageTextBlock
        title="Lifelong Friendships Are Formed"
        content="International students describe International Friends as an invaluable asset for learning about American life outside the academic environment. Southern Arizonans who have hosted students have expressed tremendous gratitude for the pleasure these relationships bring, and the goodwill generated affects both students and hosts for the rest of their lives."
        imageSrc="/images/join_image2.png"
        invert
        variant="light"
      />

      <ImageTextBlock
        title="How Hosting Works"
        content={`Students and hosts are matched for one year. Although the relationships may continue well beyond this time period, we hope hosts will make themselves available for matching with other students in upcoming years.

Any student inquiries regarding the following should be referred to the University of Arizona's International Student Services office at 520-621-4627:
* Employment instructions
* Immigration and visa issues
* Academic problems with professors, advisors and administrators
* Financial problems
* Major medical problems`}
        imageSrc="/images/zipline.jpeg"
        action={{ label: "View Guidelines", href: "/guidelines" }}
      />

      <CTASection
        title="Ready to Join?"
        description="Take the first step towards building meaningful cross-cultural friendships."
      />
    </>
  );
}
