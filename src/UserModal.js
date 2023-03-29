import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserDetails from "./UserDetails";
import { useAppContext } from "./UserProvider";

function UserModal({ userData }) {
  const [show, setShow] = useState(false);
  const { setUser } = useAppContext();

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    setUser(userData);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Full User Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserDetails userData={userData} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserModal;
