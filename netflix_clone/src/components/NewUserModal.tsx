import React, { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NewUserModalPropsI } from "../utilities/interfaces";
import { Form } from "react-bootstrap";
import { createNewGuestUser } from "../utilities/manageUsers";

const NewUserModal: React.FC<NewUserModalPropsI> = ({
  show,
  onHide,
  users,
  setUsers,
}) => {
  
  const [username, setUserName] = useState<string>('')

  const addNewUser = async (e:FormEvent): Promise<void> => {
    e.preventDefault()
    if (users.length < 4){
      let newUser = await createNewGuestUser(username)
      setUsers([...users, newUser])
    }
    setUserName('')
    onHide(!show)
  };

  return (
    <Modal
      show={show}
      onHide={() => onHide(!show)}
      animation={true}
      backdrop="static"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>Enter the Profile Name</h4>
        <Form onSubmit={(e)=>addNewUser(e)}>
          <Form.Group>
            <Form.Control
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={username}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={() => onHide(!show)}>Close</Button>
        <Button 
          variant="outline-success" 
          type="submit" 
          onClick={(e) => addNewUser(e)}
          disabled={!username.trim().length}
          >Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewUserModal;
