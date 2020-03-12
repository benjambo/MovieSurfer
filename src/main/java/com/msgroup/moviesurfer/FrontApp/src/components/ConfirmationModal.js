import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

/**
 * Returns modal window when ShowConfirmation === true.
 *
 * @param showConfirmation
 * @param setShowConfirmation
 * @param reservedSeat
 * @param movie
 * @returns {null|*}
 * @constructor
 */
const ConfirmationModal = ({
  showConfirmation,
  setShowConfirmation,
  reservedSeat,
  movie
}) => {
  //handle modal closing
  const handleClose = () => setShowConfirmation(false);

  //if showConfirmation is true show confirmation modal. else return null.
  if (showConfirmation) {
    return (
      <Modal show={showConfirmation} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Reservation successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="seats">
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
