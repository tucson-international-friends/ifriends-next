import { Container } from "react-bootstrap";
import MainLayout from "../layout/main";
import Banner from "../components/banner";

export default () => (
	<MainLayout>
		<Banner />
		<Container>
			<h1>Hello World!</h1>
		</Container>
	</MainLayout>
);
