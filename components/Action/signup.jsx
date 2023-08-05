import { useGlobal } from "reactn";
import Button from "../Button";
import { Modal } from "react-bootstrap";
import React, { useState } from "react";

const Signup = ({ label = "Sign Up", size }) => {
  const [user] = useGlobal("user");
  const [modalOpen, setModalOpen] = useState(false);
  const handleHostApplication = () => {
    setModalOpen(false);
    window.open("https://forms.gle/5t7WxJZydsZJJKRX6", "_blank");
  };
  const handleStudentApplication = () => {
    window.open("https://forms.gle/1zBXjhhCE58AeTK78", "_blank");
    setModalOpen(false);
  };
  return (
    <>
      <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
        <Modal.Header closeButton>Sign Up</Modal.Header>
        <Modal.Body>
          <p>Choose one of the following applications:</p>
          <Button
            block
            size="lg"
            label="Student"
            onClick={handleStudentApplication}
          />
          <Button
            block
            size="lg"
            label="Host"
            onClick={handleHostApplication}
          />
        </Modal.Body>
      </Modal>
      {user ? (
        <Button variant="important" size={size} label="Get Started" />
      ) : (
        <Button
          variant="important"
          onClick={() => setModalOpen(true)}
          size={size}
          label={label}
        />
      )}
    </>
  );
};

export default Signup;
