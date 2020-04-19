import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const handleClose = () => setShowConfirmation(false);

  //if showConfirmation is true show confirmation modal. else return null.
  if (showConfirmation) {
    return (
      <Modal show={showConfirmation} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{t("ConfirmationModal.title")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="seats">
            {t("seat.section.number")} {reservedSeat}{" "}
            {t("seatreservedformovie.section.number")} {movie.title}.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            {t("seats.section.cancel")}
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
