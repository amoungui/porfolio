import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field/Field";
import Select from "../../components/Select/Select";
import Button, { BUTTON_TYPES } from "../../components/Button/Button";

import "./style.scss";

const mockContactApi = () => new Promise((resolve) => setTimeout(resolve, 1000));

const Form = ({ onSuccess = null, onError = null }) => {
  const [sending, setSending] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767.98); // Initial check

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767.98);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sendContact = async (evt) => {
    evt.preventDefault();
    setSending(true);
    try {
      await mockContactApi();
      setSending(false);
      onSuccess();
    } catch (err) {
      setSending(false);
      onError(err);
    }
  };

  return (
    <div className="contact_form">
      <form onSubmit={sendContact} className="ContactForm">
        <div className="row">
          <div className="col">
            <Field placeholder="" label="Nom" />
            <Field placeholder="" label="Prénom" />
            <Select
              className="contact_select"
              selection={["Personel", "Entreprise"]}
              onChange={() => null}
              label="Personel / Entreprise"
              type="large"
              titleEmpty
            />
            <Field placeholder="" label="Email" />
          </div>
          <div className="col">
            <Field
              placeholder="message"
              label="Message"
              type={FIELD_TYPES.TEXTAREA}
            />
          </div>
        </div>
        <div className="col">
            <Button type={BUTTON_TYPES.SUBMIT} disabled={sending} className={isMobile ? "mobile-device" : "desktop-device"}>
              {sending ? "En cours" : "Envoyer"}
            </Button>
        </div>
      </form>
    </div>

  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default Form;