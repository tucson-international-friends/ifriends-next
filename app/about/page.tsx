import type { Metadata } from "next";
import { HeroBanner } from "@/components/sections/hero-banner";
import { TextBlock } from "@/components/sections/text-block";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { BoardMemberCard } from "@/components/features/board-member-card";
import { getBoardMembers } from "@/lib/notion";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about International Friends' history since 1952, hear from students and hosts, and meet our volunteer board members.",
};

export const dynamic = "force-dynamic";
export const revalidate = 60;

const studentTestimonials = [
  {
    quote:
      "I had a good time at the UA and in Tucson, but the best experience was with my International Friends family. In fact, it was like family away from home. I recommend International Friends for all international students!",
    author: "Francis Abugbilla, Ghana",
  },
  {
    quote:
      "Where to start...New country...New environment...New culture...New people...away from family...but here in University of Arizona you got International Friends...a family...home away from home...hosts you can count on...understand new culture in better way.",
    author: "Amanjot Kaur Gill, India",
  },
  {
    quote:
      "Sometimes my host cooked some American meal for me and sometimes I cooked some Korean food for him. We talked and shared cultural things about both countries. I learned so many things about the culture of the US from him.",
    author: "Hyunwoong Chang, Korea",
  },
  {
    quote:
      "When I came I wanted to know more about Tucson and the people who stay here. Moreover, I wanted a friend/mentor who can guide me. Throughout the year, I have seen many parts of Arizona with my hosts, eaten different types of cuisine and most importantly got to hear their stories of world travel.",
    author: "Rohan Gupta, India",
  },
];

const hostTestimonials = [
  {
    quote:
      "Serving as a host with International Friends has enriched my life and broadened my horizons immeasurably. It is a real joy to interact with bright, energetic young people from widely divergent cultures and to learn firsthand about the fascinating world we live in.",
    author: "Robert Woerner, Host",
  },
  {
    quote:
      "We have been involved with hosting international students for about 15 years. It has been such a fun and enriching time for us that I can't imagine why everyone would not want to participate in the experience!",
    author: "Deanne & Bill Lesley, Hosts",
  },
  {
    quote:
      "We are relatively new to International Friends and enjoying it tremendously. Our Chinese student has been with us for a year and we can already see him growing and maturing. He provides a connection to the university, as well as to the world.",
    author: "Holly & Michael Berryhill, Hosts",
  },
  {
    quote:
      "My student and I have explored the beautiful mountain canyons and desert trails surrounding Tucson. More importantly, we started learning about our unique backgrounds and experiences. I was able to help him with the transition to life in America and he has enriched my life by becoming part of my family.",
    author: "George Binder, Host",
  },
];

export default async function AboutPage() {
  const members = await getBoardMembers();
  const currentMembers = members.filter((m) => m.current);
  const pastMembers = members.filter((m) => !m.current);

  return (
    <>
      <HeroBanner
        title="Learn About Each Other's Culture"
        imageSrc="/images/about-header.jpeg"
        imagePosition="top"
        showCTA={false}
      />

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <TextBlock
              title="Our History"
              content={`International Friends was founded in 1952 by George Lee Garner Harvill, wife of University of Arizona President Richard A. Harvill, and a group of women from Tucson. At the time, there were just 63 international students at the University.

International Friends became an Arizona corporation in 2004 and also received official 501(c)(3) tax-exempt status from the IRS. This, along with the support and encouragement of international students, community hosts, and board members, provides a solid foundation for the future.`}
            />
            <TextBlock
              title="A Typical Year"
              content={`International Friends sponsors a "welcome picnic" event each Fall and Spring Terms for participating students and hosts. At these events held at a local park, we describe our program, welcome new participants, enjoy delicious food and drinks, participate in 'competitive fun' games and group dances, and engage in casual conversation to get to know each other better.

Students and hosts get together at least once a month over the course of a year. Activities can range from special events like holiday celebrations, sightseeing trips, and hiking outings, to everyday activities like shopping and sharing meals.`}
            />
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studentTestimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  quote={t.quote}
                  author={t.author}
                  className="animate-in-delayed"
                  style={
                    { animationDelay: `${i * 0.1}s` } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              What Our Hosts Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hostTestimonials.map((t, i) => (
                <TestimonialCard
                  key={i}
                  quote={t.quote}
                  author={t.author}
                  className="animate-in-delayed"
                  style={
                    { animationDelay: `${i * 0.1}s` } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">
              International Friends Board
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The all-volunteer board is composed of past and present hosts,
              international students, and an ex-officio representative from the
              UA International Student Services office.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-display font-semibold mb-8">
              Current Board Members
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {currentMembers.map((member) => (
                <BoardMemberCard
                  key={member.name}
                  name={member.name}
                  title={member.title}
                  imageUrl={member.profileUrl}
                />
              ))}
            </div>
          </div>

          {pastMembers.length > 0 && (
            <div>
              <h3 className="text-2xl font-display font-semibold mb-8">
                Previous Members
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {pastMembers.map((member) => (
                  <BoardMemberCard
                    key={member.name}
                    name={member.name}
                    title={member.title}
                    imageUrl={member.profileUrl}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
