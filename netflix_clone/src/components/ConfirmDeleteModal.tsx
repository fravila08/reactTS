import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ConfirmDeleteModalI } from "../utilities/interfaces";

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalI> = ({
  show,
  onHide,
  name,
  users,
  setUsers,
}) => {
  
  const removeUser = () => {
    if(localStorage.length > 1){
      setUsers(users.filter((user)=>(user.name !== name)))
      localStorage.removeItem(name)
    }
    else{
      alert("You must have a minimum of one user at all times")
    }
    onHide(!show)
  }

  return (
    <Modal
      show={show}
      onHide={() => onHide(!show)}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Body>
        Are you sure you'd like to delete the account for {name}?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onHide(!show)}>
          Cancel
        </Button>
        <Button variant="outline-danger" onClick={removeUser}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDeleteModal;
