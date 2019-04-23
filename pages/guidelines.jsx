import { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ReactMarkdown from "react-markdown";
import MainLayout from "../layout/main";

export default class GuidelinePage extends Component {
	static async getInitialProps() {
		return {
			guidelines: [{
				name: "host",
				label: "For Host",
				content: `
* Students are assigned to hosts for a period of one year as long as it is mutually satisfying. Although the relationships may continue well beyond the year, we hope hosts will make themselves available to other first year students

* Any student queries regarding the following should be referred to *International Student Services (ISS)*:
  * Employment instructions
  * Immigration and Visa Issues
  * Academic problems with professors, advisors and administrators
  * Financial problems
  * Major medical problems

* Studies are the first priority.

* Proselytizing is not allowed. If you invite your student to a religious activity, make the nature and sponsorship of the activity clear in advance. Respect their wishes if they choose not to go.

* Do not offer financial loans, guarantees for visas, or loans for purchasing cars, leasing apartments, etc. And, do not ask for loans from students.

* It is strongly recommended that you do not establish a landlord/tenant relationship with your student.

* Obey US laws, including those governing alcohol, employment, etc. Sexual harassment is not tolerated and must be reported to the International Friends chairperson.

* Do not take students into Mexico unless cleared by ISS. *Visa status is at risk*.

* Traveling anywhere, even on day trips, it is wise for students to carry their paperwork.

* Clarify special requirements, such as dietary, religious or other customary practices to avoid problems and confusion.

* Call your student(s) or email to introduce yourself within 1 week of assignment. If you have problems in establishing a relationship or no longer wish to participate, please notify the *International Friends (IF)* chair.

* Provide transportation for the student's first visit.

* Advise students of the types of pets you own.

* Invite student to your home within the first month or two if possible.

* Research and become familiar with your student's country. Find out about attitudes, ethnic groups, language, food, gift giving.

* Share views on each other's economic and political systems. Talk about current news events, but do not alienate.

* Spend time with your student answering questions about traditions and customs in the US. Ask your students to share stories and show pictures about their countries, friends, families.

* Invite your student to picnics, celebrations (birthdays, anniversaries, graduations), schools, day trips, city and surrounding area sites, hospitals, your office.

* Advise the ISS if your student seems to be having a difficult time adjusting.

* Promotion of non-IF organizations, programs, events, membership and sales of non-IF-related materials are strictly prohibited at official IF events, such as luncheons, receptions and picnics, unless such participation has been requested/approved by the IF board.

* Because IF's intent is to connect students with residents of Tucson outside of the UA campus environment, undergraduate and graduate students may not serve as IF hosts. However, opportunities exist for students to get involved as "junior hosts" and as volunteers at IF events.
				`
			}, {
				name: "student",
				label: "For Students",
				content: `
* The period of assignment to a host is for one year as long as it is mutually satisfying. Your relationship may continue well beyond the year. In fact, you and your host may want to welcome another student at the beginning of the next winter semester.

* Any student queries regarding the following should be referred to *International Student Services (ISS)*:
  * Employment instructions
  * Immigration and Visa Issues
  * Academic problems with professors, advisors and administrators
  * Financial problems
  * Major medical problems

* Studies are the first priority.

* No proselytizing unless by mutual consent.

* Do not ask for financial loans, guarantees for visas, purchasing cars, leasing apartments, etc. This is an imposition and places hosts in an uncomfortable position, especially since hosts may not be able to afford this risk and cannot offer this for every student.

* Obey US laws, including those governing alcohol, employment, etc. Sexual harassment is not tolerated and must be reported to the ISS; (520) 621-4627.

* Clarify special requirements, such as dietary, religious or other customary practices to avoid problems and confusion.

* Call your host or email to introduce yourself within 1 week of assignment.

* Return your hosts calls and emails.

* Be prompt and remember that saying "no" is OK and better than not responding.

* Advise your host if you are allergic or afraid of any pets.

* Spend time with you host family asking about the customs in the US and share stories and pictures about your family and friends.

* Research and get acquainted with some important holidays, such as Independence Day (July 4) and Thanksgiving. Learn about Halloween, St. Patrick's Day and other fun holidays. Remember, the United States is comprised of people from many cultures, races, religions and ethnic groups.

* Share views on each others economic and political systems. Talk about current news events, but do not alienate.

* Don't ignore your host! Spend time with them and learn about life in Tucson and in the USA. If you find you have no time to participate, notify the ISS so another student can be assigned.

* Cook a traditional meal for your host. Ask if you can use their kitchen if you do not have space.

* If you have problems in establishing a relationship with your host or no longer wish to participate, please notify the ISS.
`
			}]
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
								<Nav.Link
									eventKey={name}
									key={name}>
									{label}
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
					<ReactMarkdown className="p-2 mt-2" source={guidelines.find(guildline => guildline.name === active).content} />
				</Container>
			</MainLayout>
		);
	}
}
