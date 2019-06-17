import { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ReactMarkdown from "react-markdown";
import MainLayout from "../layout/main";

export default class GuidelinePage extends Component {
	static async getInitialProps() {
		return {
			guidelines: [
				{
					name: "host",
					label: "For Host",
					content: `
* Students are matched with hosts for a period of one year, as long as it is mutually satisfying, with an obligation to get together a minimum of once a month.  Although the relationships may continue well beyond the year, we hope hosts will make themselves available to other first year students in subsequent years.

* Call or email your student to introduce yourself within one week of being matched.

* Any student inquiries regarding the following should be referred to the International Student Services (ISS) office, 520 621-4627:
  * Employment instructions
  * Immigration and Visa Issues
  * Academic problems with professors, advisors and administrators
  * Financial problems
  * Major medical problems

* School work and study are every student’s first priority.

* Proselytizing is not allowed. If you invite your student to a religious activity, make the nature and sponsorship of the activity clear in advance.  Respect their wishes if they choose not to go. International Friends (IF) is about mutual respect and friendship.

* Do not offer financial loans, guarantees for visas, or loans for purchasing cars, leasing apartments, etc. And, do not ask for loans from students. It is strongly recommended that you do not establish a landlord/tenant relationship with your student.

* It is strongly recommended that you do not establish a landlord/tenant relationship with your student.

* Obey US laws, including those governing alcohol, employment, etc.  Sexual harassment is not tolerated and must be reported to International Friends, info@ifriendstucson.org, or the ISS office, 520 621-4627.

* Do not take student into Mexico unless cleared by the ISS office, 520 621-4627. Visa status could be put at risk.

* Clarify special requirements, such as dietary, religious, or other customary practices to avoid problems and confusion.

* Consider inviting student to your home within the first month or two.  Provide transportation for the student’s first visit, if possible.

* Advise student of the types of pets you own.

* Invite student to your home within the first month or two if possible.

* Research and become familiar with your student’s country and culture.  Find out about attitudes, ethnic groups, language, food, gift giving, etc.

* Share views on each other’s economic and political systems.  Talk about current news events, but do not pontificate or alienate.

* Spend time with your student answering questions about traditions and customs in the US.  Ask your student to share stories and show pictures of home countries, families, and friends.

* Invite your student to picnics, sporting events, your workplace, and celebrations such as birthdays, anniversaries, graduations, holidays, and local festivals.  Take day trips, visit city and surrounding area sites, museums, and attractions.

* Advise the ISS office, 520 621-4627, if your student seems to be having a difficult time adjusting.  If you have problems in establishing a relationship or no longer wish to participate, please notify International Friends, info@ifriendstucson.org.

* While graduate and undergraduate students may not serve as IF hosts, they are welcome to participate as volunteers at IF events.

* Promotion of non-International Friends organizations, programs, events, membership, and sales of non-IF-related materials are strictly prohibited at IF events unless participation has been requested/approved by the IF board.`
				},
				{
					name: "student",
					label: "For Students",
					content: `
* The period of matching to a host is for one year, as long as it is mutually satisfying.  Your relationship may continue well beyond the year.  In fact, you and your host may want to welcome another student at the beginning of the next academic year.

* Call or email your host to introduce yourself within one week of assignment.

* If you have any questions regarding the following, contact the International Student Services (ISS) office, 520 621-4627:
  * Employment instructions
  * Immigration and Visa Issues
  * Academic problems with professors, advisors and administrators
  * Financial problems
  * Major medical problems

* School work and study are every student’s first priority.

* Proselytizing is not allowed. If you invite your host to a religious activity, make the nature and sponsorship of the activity clear in advance.  Respect their wishes if they choose not to go.  International Friends is about mutual respect and friendship.

* Do not ask for financial loans, guarantees for visas, or loans for purchasing cars, leasing apartments, etc.  This is an imposition and places hosts in an uncomfortable position, especially since hosts may not be able to afford this risk and cannot offer this for every student.

* Obey US laws, including those governing alcohol, employment, etc.  Sexual harassment is not tolerated and must be reported to International Friends, info@ifriendstucson.org, or the ISS office, 520 621-4627.

* Advise your host and the ISS office of any address, email address, or phone number change.

* Clarify special requirements, such as dietary, religious, or other customary practices to avoid problems and confusion.

* Return your host’s calls and emails in a timely manner.

* Advise your host if you are allergic to or afraid of any pets.

* Feel free to ask your host about traditions and customs in the US, and share your own country’s traditions and pictures and stories of your family and friends with your host.


* Become familiar with important holidays, and remember that the United States is comprised of people from many different cultures, races, religions, and ethnic groups.

* Share views on each other’s economic and political systems.  Talk about current news events, but do not pontificate or alienate.

* Cook a traditional meal for your host.  Ask if you can use your host’s kitchen if you do not have space.

* Don’t ignore your host!  Spend time with them and learn about life in Tucson and in the US.  If you find you do not have time to participate, notify International Friends, info@ifriendstucson.org, so another student can be matched with your host.

* If you have problems establishing a relationship with your host or no longer wish to participate, please notify International Friends, info@ifriendstucson.org.
`
				}
			]
		};
	}

	constructor(props) {
		super(props);
		this.state = { active: "host" };
	}

	render() {
		const { guidelines } = this.props;
		const { active } = this.state;
		return (
			<MainLayout>
				<Container className="pt-5 mt-5">
					<h2>Guiding Principles</h2>
					<Nav
						variant="pills"
						justify
						fill
						activeKey={active}
						onSelect={(eventKey) => {
							this.setState({ active: eventKey });
						}}>
						{guidelines.map(({ name, label, content }) => (
							<Nav.Item key={name}>
								<Nav.Link eventKey={name} key={name}>
									{label}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
					<ReactMarkdown
						className="p-2 mt-2"
						source={
							guidelines.find(guildline => guildline.name === active).content
						}
					/>
				</Container>
			</MainLayout>
		);
	}
}
