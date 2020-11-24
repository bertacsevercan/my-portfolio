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
          Contact me
          <FaLevelDownAlt />{" "}
        </h1>
        <Form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="john.doe@mail.com"
            />
          </Form.Group>
          <Form.Group controlId="formInputName">
            <Form.Label>Your full name</Form.Label>
            <Form.Control name="fullName" placeholder="John Doe" />
          </Form.Group>
          <Form.Group controlId="formInputSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control name="subject" placeholder="What is it about?" />
          </Form.Group>
          <Form.Group controlId="form.ControlTextarea">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              name="message"
              placeholder="Hello, Bertaç!"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button variant="danger" type="submit" block>
            Send
          </Button>
        </Form>
      </div>
      <div className="contact-info">
        <h1>
          Other contact information <FaAddressCard />{" "}
        </h1>
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
    </div>
  );
};

export default Contact;
