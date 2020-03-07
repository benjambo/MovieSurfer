import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MovieSeats from "./MovieSeats";

/**
 * display popup window on button click
 *
 * @returns {*}
 * @constructor
 */
const MovieReservationModal = ({
  movie,
  setShowConfirmation,
  setReservedSeat
}) => {
  const [show, setShow] = useState(false);
  const [freeSeat, setFreeSeat] = useState(false);

  //handel modal opening and closing
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleReserve = () => {
    if (!freeSeat) {
      alert("this seat is not available! pick another seat.");
    } else {
      handleClose();
    }
  };

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        Reserve
      </Button>

      <Modal
        className="reservation-modal"
        show={show}
        onHide={handleClose}
        onExited={() => setShowConfirmation(true)}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Seats for {movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <MovieSeats
              movie={movie}
              setFreeSeat={setFreeSeat}
              setReservedSeat={setReservedSeat}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={handleReserve}>
            Reserve
          </Button>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieReservationModal;
