import { Modal, Form, Alert, Row, Col } from "react-bootstrap";
import { useCallback, useState } from "react";
import { useGlobal } from "reactn";
import firebase from "../../lib/firebase";
import Button, { LoginButton } from "../Button";

const Login = ({ label = "Log In" }) => {
  const [user, setUser] = useGlobal("user");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = useCallback(() => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        setError(err.message);
      });
  }, [email, password]);
  const handleSuccess = useCallback(
    (result) => {
      setUser(result.user);
    },
    [setUser],
  );
  const handleError = useCallback((err) => {
    setError(err.message);
  }, []);
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{label}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert
            variant="danger"
            show={!!error}
            dismissible
            onClose={() => {
              setError(null);
            }}
          >
            {error}
          </Alert>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="important" label="Log In" onClick={handleLogin} />
          </Form>
          <div
            style={{
              borderBottom: "2px rgba(0,0,0,0.1) dashed",
              height: "1rem",
              marginBottom: "1rem",
            }}
          />
          <Row>
            <Col md={6}>
              <LoginButton
                variant="Google"
                handleSuccess={handleSuccess}
                handleError={handleError}
              />
            </Col>
            <Col md={6}>
              <LoginButton
                variant="Facebook"
                handleSuccess={handleSuccess}
                handleError={handleError}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      <Button
        variant="outline-light"
        label={label}
        onClick={() => setShowModal(true)}
      />
    </>
  );
};

export default Login;
