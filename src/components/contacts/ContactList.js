import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";
function ContactList({ contacts, getContacts }) {
  const [varyingState, setVaryingState] = useState("");
  const [editContactModal, setEditContactModal] = useState(false);
  const [deleteContactModal, setDeleteContactModal] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactId, setContactId] = useState("");
  async function editContact(e) {
    e.preventDefault();

    try {
      const contactData = {
        name: contactName,
        number: contactNumber,
        contactId: contactId,
      };
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact/edit`, contactData);
      setEditContactModal(false);
      getContacts();
    } catch (err) {
      console.error(err);
    }
  }
  async function deleteContact(e) {
    var BASE_URL = "http://localhost:5000";
    e.preventDefault();

    try {
      const contactData = {
        contactId: contactId,
      };
      // await axios.post("http://localhost:5000/customer/", customerData);
      await axios.post(`${BASE_URL}/contact/delete`, contactData);
      setDeleteContactModal(false);
      getContacts();
    } catch (err) {
      console.error(err);
    }
  }
  function renderContacts() {
    return contacts.map((contact, i) => {
      return (
        <MDBCol key={i} md="4" xs="12" sm="6" lg="3">
          <MDBCard className="shadow-sm">
            <MDBCardBody className="p-3">
              <div className="d-flex flex-row p-0 align-items-center mb-3">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg"
                  className="rounded-circle me-3"
                  height="50px"
                  alt="avatar"
                />
                <div>
                  <h5 className="card-title font-weight-bold mb-2">
                    {contact.name}
                  </h5>
                </div>
              </div>
              <MDBCardText>
                <MDBIcon icon="phone" className="me-3" />
                {contact.number}
              </MDBCardText>
              <div className="d-flex flex-row p-0 align-items-center mb-3">
                <MDBBtn
                  outline
                  color="dark"
                  className="me-2"
                  type="button"
                  onClick={() => {
                    setVaryingState(contact.name);
                    setEditContactModal(!editContactModal);
                    setContactName(contact.name);
                    setContactNumber(contact.number);
                    setContactId(contact._id);
                  }}
                >
                  Edit
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  className="me-2 shadow-sm"
                  type="button"
                  onClick={() => {
                    setVaryingState(contact.name);
                    setDeleteContactModal(!deleteContactModal);
                    setContactId(contact._id);
                  }}
                >
                  delete
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    });
  }

  return (
    <div className="mt-4">
      <MDBRow>{renderContacts()}</MDBRow>
      {/* edit modal */}
      <MDBModal
        show={editContactModal}
        setShow={setEditContactModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Editing contact of {varyingState}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setEditContactModal(!editContactModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <form onSubmit={editContact}>
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
      {/* delete modal */}
      <MDBModal
        show={deleteContactModal}
        setShow={setDeleteContactModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Deleting contact of {varyingState}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setDeleteContactModal(!deleteContactModal)}
              ></MDBBtn>
            </MDBModalHeader>
              <MDBModalBody>
               Are you sure you want to delete this contact?
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="danger" className="me-2 shadow-sm" type="submit" onClick={deleteContact}>
                  Delete
                </MDBBtn>
              </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}

export default ContactList;
