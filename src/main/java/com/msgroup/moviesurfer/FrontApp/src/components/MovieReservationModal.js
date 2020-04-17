import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import MovieSeats from "./MovieSeats";
import { isLoggedIn, getUserEmail } from "../services/AuthService";
import seatServiceReact from "../services/seatServiceReact";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * Returns popup window on button click.
 * If user is not logged in open different popup.
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
  const { t } = useTranslation();

  //handel modal opening and closing
  const handleClose = () => {
    setFreeSeat(false);
    setShow(false);
  };

  const handleCloseNotSinged = () => {
    setShowNotSinged(false);
  };

  //check if user is logged in.
  //if user is logged in return movie reservation modal.
  //if user is not logged in return modal that tells user to log in and can redirect user to login page on button click.
  const handleShow = () => {
    if (!isLoggedIn()) {
      setShowNotSinged(true);
    } else {
      setShow(true);
      setShowConfirmation(false);
      setConfirmation(false);
    }
  };

  //if seat is not available alert user. Else reserve seat.
  const handleReserve = () => {
    if (!freeSeat) {
      alert(t("seats.section.alert"));
    } else {
      const email = getUserEmail();
      seatObject.reservedTo = email;
      console.log(seatObject);
      seatServiceReact.reserveSeat(seatObject);
      setConfirmation(true);
      handleClose();
    }
  };

  const history = useHistory();

  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        {t("seats.section.reservation")}
      </Button>
      <Modal
        className="reservation-modal"
        show={showNotSigned}
        onHide={handleCloseNotSinged}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {t("seats.sign.section")} {movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            onClick={() => history.push("/sign")}
            variant="outline-success"
          >
            {t("seats.sign.create")}
          </Button>
          <Button variant="outline-danger" onClick={handleCloseNotSinged}>
            {t("seats.section.cancel")}
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
          <Modal.Title>
            {t("seats.section.movie")} {movie.title}
          </Modal.Title>
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
            {t("seats.section.reservation")}
          </Button>

          <Button variant="outline-danger" onClick={handleClose}>
            {t("seats.section.cancel")}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieReservationModal;
