import { useState } from "react";
import { Modal, Button, Form, Accordion } from "react-bootstrap";


const CareerApplyModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Apply Button */}
      <div className="text-end">
        <button
          type="button"
          className="submit_btn ms-auto py-0 px-5"
          onClick={handleShow}
        >
          Apply
        </button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg" className="career-modal">
        <Modal.Header closeButton color="" className="bg-white">
          <Modal.Title>Apply for Position</Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-white">
          <Form className="py-1 px-4">
            <Form.Group className="mb-3 form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>

            <Form.Group className="mb-3 form-group">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your cover letter"
              />
            </Form.Group>

            <Form.Group className="mb-4 form-group">
              <Form.Label>Resume Upload</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <div className="text-end">
              <Button variant="secondary" className="me-2" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="" className="submit_btn text-white" type="submit">
                Submit Application
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CareerApplyModal;
