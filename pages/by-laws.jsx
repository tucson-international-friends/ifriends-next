import { Container } from "react-bootstrap";
import MainLayout from "../layout/main";
import { getStorageMediaUrl } from "../lib/image";

const ByLaws = () => (
	<MainLayout>
		<Container
			style={{
				paddingTop: "10em",
				paddingBottom: "10em"
			}}>
			<h2>Bylaws</h2>
			<iframe title="latest newsletter" width="100%" style={{ height: "75vh" }} src={getStorageMediaUrl("bylaws.pdf")} />
		</Container>
	</MainLayout>
);

export default ByLaws;
