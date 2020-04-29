import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AdminModal = ({ showModal, showAlert, modalSubmit }) => {
  const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <Modal show={ showModal } backdrop="static">
      <Modal.Header>
        <Modal.Title>Admin login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert show={ showAlert } variant="danger">
          Sorry, that password is incorrect. Please try again
        </Alert>
        <Form onSubmit={ (e) => modalSubmit(e, value) }>
          <Form.Group controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Please enter the password" required onChange={ handleChange } value={ value }/>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AdminModal;
