import React from 'react'
import Modal from 'react-bootstrap/Modal';
import EnquiryForm from './EnquiryForm';

const Enquiry = (props) => {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton style={{backgroundColor:"#2e8b57"}}>
            <Modal.Title id="contained-modal-title-vcenter" className='text-light'>
            Provide Details of Your Inquiry
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EnquiryForm />
          </Modal.Body>
          
        </Modal>
  )
}

export default Enquiry
