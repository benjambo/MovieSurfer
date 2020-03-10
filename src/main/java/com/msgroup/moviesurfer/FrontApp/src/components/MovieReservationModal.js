import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MovieSeats from "./MovieSeats";
import { isLoggedIn, logout } from "../services/AuthService";
import seatServiceReact from "../services/seatServiceReact";
import { Route, Switch, Redirect, Router, useHistory } from "react-router-dom";

/**
 * display popup window on button click.
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
  const [showNotSigned, setShowNotSinged] = useState(false);
  const [freeSeat, setFreeSeat] = useState(false);
  const [seatObject, setSeatObject] = useState(null);
  const [confirmation, setConfirmation] = useState(false);

  //handel modal opening and closing
  const handleClose = () => {
    setFreeSeat(false);
    setShow(false);
  };

  const handleCloseNotSinged = () => {
    setShowNotSinged(false);
  };

  const handleShow = () => {
    if (!isLoggedIn()) {
      setShowNotSinged(true);
    } else {
      setShow(true);
      setShowConfirmation(false);
      setConfirmation(false);
    }
  };

  const handleReserve = () => {
    if (!freeSeat) {
      alert("this seat is not available! pick another seat.");
    } else {
      seatServiceReact.reserveSeat(seatObject);
      setConfirmation(true);
      handleClose();
    }
  };

  const history = useHistory();

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        Reserve
      </Button>
      <Modal
        className="reservation-modal"
        show={showNotSigned}
        onHide={handleCloseNotSinged}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Please Sign In or Create an Account to reserve seats for{" "}
            {movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => history.push("/sign")}
            variant="outline-success"
          >
            Sign in or Create Account
          </Button>
          <Button variant="outline-danger" onClick={handleCloseNotSinged}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        className="reservation-modal"
        show={show}
        onHide={handleClose}
        onExited={() => setShowConfirmation(confirmation)}
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
              setSeatObject={setSeatObject}
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
