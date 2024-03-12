import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";

import React from 'react'
import products from '../products';

const EnquiryForm = () => {
  const { id } = useParams();

  const product = products.find((p) => p._id === id);
  return (
    <>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="hidden" disabled value={product.name} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="John" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="email" placeholder="(+91) XXXXX XXXXX" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Type your inquiry or message here...' />
      </Form.Group>
    </Form>
    </>
  )
}

export default EnquiryForm