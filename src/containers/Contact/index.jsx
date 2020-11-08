import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "./style.css";

const Contact = () => {
  return (
  <div className="contact">
    <div className="form-wrapper">
    <Form name="contact" method="POST" data-netlify="true">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Your Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Please enter a valid email.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formInputName">
    <Form.Label>Your Full Name</Form.Label>
    <Form.Control placeholder="Full Name" />
    <Form.Text className="text-muted">
      E.g: John Doe
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formInputSubject">
    <Form.Label>Subject</Form.Label>
    <Form.Control placeholder="Subject" />
    <Form.Text className="text-muted">
      What is it about?
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="form.ControlTextarea">
    <Form.Label>Your Message</Form.Label>
    <Form.Control placeholder="Hello, Bertaç!" as="textarea" rows={3} />
  </Form.Group>
 
  <Button variant="danger" type="submit" block>
    Submit
  </Button>
</Form>
</div>
  </div>
  );
};

export default Contact;
