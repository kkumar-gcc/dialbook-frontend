import axios from "axios";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import React, { useState } from "react";

function ContactForm({ getContacts }) {
  const [staticModal, setStaticModal] = useState(false);
  const toggleShow = () => setStaticModal(!staticModal);
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  async function saveContact(e) {
    e.preventDefault();

    try {
      const contactData = {
        name: contactName,
        number: contactNumber,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact/`, contactData);
      setStaticModal(false);
      getContacts();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <MDBBtn
        color="dark"
        className="me-2 shadow-sm"
        type="button"
        onClick={toggleShow}
      >
        New contact
      </MDBBtn>
      <MDBModal
        staticBackdrop
        tabIndex="-1"
        show={staticModal}
        setShow={setStaticModal}
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Create new contact</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <form onSubmit={saveContact}>
              <MDBModalBody>
                <MDBInput
                  onChange={(e) => {
                    setContactName(e.target.value);
                  }}
                  value={contactName}
                  type="text"
                  id="validationCustom01"
                  required
                  label="Contact name"
                  className="mb-3"
                />
                <MDBInput
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                  value={contactNumber}
                  type="number"
                  id="validationCustom01"
                  required
                  label="Contact number"
                  className="mb-3"
                />
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="dark" className="me-2 shadow-sm" type="submit">
                  Save
                </MDBBtn>
              </MDBModalFooter>
            </form>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default ContactForm;
