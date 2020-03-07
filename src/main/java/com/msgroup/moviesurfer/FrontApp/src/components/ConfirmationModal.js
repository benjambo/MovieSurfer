import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmationModal = ({
  showConfirmation,
  setShowConfirmation,
  reservedSeat,
  movie
}) => {
  //handel modal closing
  const handleClose = () => setShowConfirmation(false);

  if (showConfirmation) {
    return (
      <Modal show={showConfirmation} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            Seat number {reservedSeat} reserved for movie {movie.title}.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    console.log("return null");
    return null;
  }
};

export default ConfirmationModal;
