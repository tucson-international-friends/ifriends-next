import { Container } from "react-bootstrap";
import MainLayout from "../layout/main";

const ByLaws = () => (
  <MainLayout>
    <Container
      style={{
        paddingTop: "10em",
        paddingBottom: "10em",
      }}>
      <h2>Bylaws</h2>
      <iframe
        title="Bylaws"
        width="100%"
        style={{ height: "75vh" }}
        src={"https://drive.google.com/file/d/18eOqpZ9YtkMvrIv1_9KsK8hHcesaHY0x/preview"}
      />
    </Container>
  </MainLayout>
);

export default ByLaws;
