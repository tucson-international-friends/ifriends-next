import { HeroBanner } from "@/components/sections/hero-banner";
import { TextBlock } from "@/components/sections/text-block";
import { ImageTextBlock } from "@/components/sections/image-text-block";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroBanner
        title={
          <>
            Every Student <span className="text-accent block">Deserves</span> a
            Sense of Home
          </>
        }
        subtitle="International Friends brings together international students and Tucson community members to build lasting friendships and cultural understanding."
        imageSrc="/images/home_header1.jpeg"
        imagePosition="top"
      />

      <section className="section-padding bg-background">
        <div className="container-editorial">
          <div className="text-center mb-16">
            <span className="editorial-caption text-accent mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight max-w-4xl mx-auto leading-[1.05]">
              Building bridges between cultures since 1952
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <TextBlock
              title="Who We Are"
              content="International Friends provides opportunities for international students and local hosts to develop close friendships and an understanding of and appreciation for each other's cultures. We offer activities through which international students may participate in the life of the community."
              action={{ label: "About Us", href: "/about" }}
            />
            <TextBlock
              title="What We Do"
              content="Our goal is simple but important. We bring people together to share their cultures, interests, and life experiences. Local hosts match with international students, and then meet at least once a month for one year. International Friends is not a live-in hosting program, and we have no religious affiliation. Participation is open to international students attending the University of Arizona and to Southern Arizona residents who serve as hosts."
              action={{ label: "Learn More", href: "/about" }}
            />
          </div>

          <div className="mt-20 lg:mt-28">
            <div className="relative">
              <div className="absolute -inset-2 bg-accent/10 -z-10" style={{ transform: 'translate(12px, 12px)' }} />
              <div className="aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  src="https://arizona.hosted.panopto.com/Panopto/Pages/Embed.aspx?id=06dd0cd1-402e-4042-bd61-abf8013f6212&autoplay=false&offerviewer=true&showtitle=false&showbrand=false&start=0&interactivity=all"
                  title="International Friends Video"
                />
              </div>
            </div>
            <p className="editorial-caption text-center mt-6 text-muted-foreground">Watch our story</p>
          </div>
        </div>
      </section>

      <ImageTextBlock
        title="Why Become an International Friends Host"
        content={`
* Learn about other countries and cultures
* Participate in activities with interesting and eager students
* Help international students adjust to American culture
* Have fun!
        `}
        imageSrc="/images/pat_paul.png"
        action={{ label: "Learn More", href: "/about" }}
        invert
        variant="light"
      />

      <ImageTextBlock
        title="Why Do International Students Participate"
        content={`
* Learn about and more easily adjust to American culture
* Participate in the life of the Tucson community
* Share in sightseeing, dinners, and other activities with community individuals and families
* Have fun!
        `}
        imageSrc="/images/46770484_10215442170621608_1860845059742629888_o.jpeg"
        action={{ label: "Learn More", href: "/about" }}
      />

      <ImageTextBlock
        title="What is Expected of Hosts and Students"
        content={`
* Commit to participate for one year
* Hosts and students contact each other within days of being matched
* Students and hosts get together at least once a month during the school year for activities that both would enjoy
* Hosts and students share ideas, customs, and cultures
* Follow the International Friends Guidelines for hosts and students
        `}
        imageSrc="/images/46766821_1514707395339433_5267609408078086144_n.jpeg"
        action={{ label: "Guidelines", href: "/guidelines" }}
        invert
        variant="light"
      />

      <ImageTextBlock
        title="Your Support is Important!"
        content={`
* Donate to support International Friends' mission and our events, programs, and activities
* Help pay for event space rental costs, supplies, food for picnics, and other events
* Assist with website, listserv, marketing, and organizational costs
* Help defray the cost of printed materials, such as brochures, guidelines, newsletters, and banners
        `}
        imageSrc="/images/20190929_120315.jpg"
        action={{
          label: "Donate Now",
          href: "https://donorbox.org/ongoing-support-for-international-friends",
        }}
      />

      <CTASection
        title="Get Involved"
        description={`Make a "world of difference" in the lives of international students and local hosts. It's fun, it's easy, and it changes lives.`}
      />
    </>
  );
}
