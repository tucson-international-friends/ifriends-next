import { MDBFooter, MDBContainer, MDBRow } from "mdbreact";

const Footer = () => (
	<MDBFooter>
		<MDBContainer>
			<MDBRow md={6}>
				<h4>Tucson International Friends</h4>
				<p>
					{`International Friends is an all-volunteer organization that brings
					together international students attending the University of Arizona
					and residents of Tucson.`}
				</p>
			</MDBRow>
		</MDBContainer>
	</MDBFooter>
);

export default Footer;
