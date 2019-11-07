import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Contact from "./contact";

const BoardList = ({ members }) => (
	<Row>
		{members.map(member => (
			<Col xs={6} md={4} lg={3} xl={2} key={`${member.firstName}-${member.lastName}`}>
				<Contact {...member} />
			</Col>
		))}
	</Row>
);

export default BoardList;
