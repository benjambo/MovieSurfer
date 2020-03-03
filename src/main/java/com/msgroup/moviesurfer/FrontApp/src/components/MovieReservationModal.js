import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


const MovieReservationModal = () => {
    const [show, setShow] = useState(false);

    //handel modal opening and closing
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button onClick={handleShow}>
                Reserve
            </Button>

            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Reserve movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        content
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default MovieReservationModal;
