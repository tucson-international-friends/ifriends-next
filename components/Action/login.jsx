import { Modal, Form, Alert } from "react-bootstrap";
import { useCallback, useState } from "react";
import Button from "../Button";
import firebase from "../../lib/firebase";

const Login = ({ label = "Log In" }) => {
	const [showModal, setShowModal] = useState(false);
	const [error, setError] = useState(null);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleLogin = useCallback(
		() => {
			firebase.auth().signInWithEmailAndPassword(email, password).catch((err) => {
				setError(err.message);
			});
		},
		[email, password],
	);
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
						}}>
						{error}
					</Alert>
					<Form>
						<Form.Group controlId="email">
							<Form.Label>Email</Form.Label>
							<Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="password">
							<Form.Label>Email</Form.Label>
							<Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" label="Log In" onClick={handleLogin} />
				</Modal.Footer>
			</Modal>
			<Button
				variant="outline-light"
				label={label}
				onClick={() => setShowModal(true)} />
		</>
	);
};

export default Login;
