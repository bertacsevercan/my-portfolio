import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
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
import hey from "../../images/hey.png";
import "./style.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="form-wrapper">
        <h1>
          {t("contact.titles.title0")}
          <FaLevelDownAlt />{" "}
        </h1>
        <Form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{t("contact.labels.label0")}</Form.Label>
            <Form.Control
              name="email"
              type="email"
              required="true"
              placeholder={t("contact.placeholders.holder0")}
            />
          </Form.Group>
          <Form.Group controlId="formInputName">
            <Form.Label>{t("contact.labels.label1")}</Form.Label>
            <Form.Control
              name="fullName"
              placeholder={t("contact.placeholders.holder1")}
              required="true"
            />
          </Form.Group>
          <Form.Group controlId="formInputSubject">
            <Form.Label>{t("contact.labels.label2")}</Form.Label>
            <Form.Control
              name="subject"
              placeholder={t("contact.placeholders.holder2")}
              required="true"
            />
          </Form.Group>
          <Form.Group controlId="form.ControlTextarea">
            <Form.Label>{t("contact.labels.label3")}</Form.Label>
            <Form.Control
              name="message"
              required="true"
              placeholder={t("contact.placeholders.holder3")}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button variant="danger" type="submit" block>
            {t("contact.button")}
          </Button>
        </Form>
      </div>
      <div className="contact-info">
        <h1>
          {t("contact.titles.title1")} <FaAddressCard />{" "}
        </h1>
        <br />
        <div className="contact-info-flex">
          <div className="contact-info-text">
            <h5>
              {" "}
              <FaMapMarkedAlt /> {t("contact.headers.head0")}
            </h5>
            <p>{t("contact.texts.text0")}</p>
            <br />
            <h5>
              {" "}
              <FaPhoneAlt /> {t("contact.headers.head1")}
            </h5>
            <p>+905433279325</p>
            <br />
            <h5>
              {" "}
              <FaMailBulk /> {t("contact.headers.head2")}
            </h5>
            <p>bertac.severcan@gmail.com</p>
            <br />
            <h5>
              {" "}
              <FaUserFriends /> {t("contact.headers.head3")}
            </h5>
            <div className="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                title={t("contact.texts.text1")}
                href="https://github.com/bertacsevercan"
              >
                {" "}
                <FaGithub className="social-icons" />{" "}
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                title={t("contact.texts.text2")}
                href="https://www.linkedin.com/in/bertac-severcan/"
              >
                {" "}
                <FaLinkedinIn className="social-icons" />{" "}
              </a>
            </div>
          </div>
          <Image className="hey" src={hey} width="250" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
