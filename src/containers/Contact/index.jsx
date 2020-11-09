import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaMailBulk,
  FaAddressCard,
  FaUserFriends,
  FaGithub,
  FaLinkedinIn,
  FaLevelDownAlt,
} from "react-icons/fa";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="form-wrapper">
        <h1>
          Contact Me
          <FaLevelDownAlt />{" "}
        </h1>
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
            <Form.Text className="text-muted">E.g: John Doe</Form.Text>
          </Form.Group>

          <Form.Group controlId="formInputSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control placeholder="Subject" />
            <Form.Text className="text-muted">What is it about?</Form.Text>
          </Form.Group>
          <Form.Group controlId="form.ControlTextarea">
            <Form.Label>Your Message</Form.Label>
            <Form.Control placeholder="Hello, Bertaç!" as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger" type="submit" block>
            Send
          </Button>
        </Form>
      </div>
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <h1>Other Contact Information</h1>
          <h5>
            {" "}
            <FaMapMarkedAlt /> Address:
          </h5>
          <p>Istanbul/Turkey</p>
          <h5>
            {" "}
            <FaPhoneAlt /> Phone:
          </h5>
          <p>+905433279325</p>
          <h5>
            {" "}
            <FaMailBulk /> Email Address:
          </h5>
          <p>bertac.severcan@gmail.com</p>
          <h5>
            {" "}
            <FaUserFriends /> Social Media:
          </h5>
          <div className="social-links">
            <a
              target="_blank"
              rel="noreferrer"
              title="Link to my github profile"
              href="https://github.com/bertacsevercan"
            >
              {" "}
              <FaGithub className="social-icons" />{" "}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              title="Link to my linkedin profile"
              href="https://www.linkedin.com/in/bertac-severcan/"
            >
              {" "}
              <FaLinkedinIn className="social-icons" />{" "}
            </a>
          </div>
        </div>
        <FaAddressCard className="address-icon" />
      </div>
    </div>
  );
};

export default Contact;
