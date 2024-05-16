import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button/Button";


const mockContactApi = () => new Promise((resolve) => { setTimeout(resolve, 1000); })

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);
      // We try to call mockContactApi
      try {
        await mockContactApi();
        setSending(false);
        onSuccess();  // Call the onSuccess function
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError]
  );
  return (
    <div className="contact_form">
      <form onSubmit={sendContact} className="contact__form">
        <div className="row">
          <div className="col">
            <Field placeholder="" label="Name" className="contact__input"/>
            <Field placeholder="" label="Prénom" className="contact__input"/>
            <Select
              className="contact__input"
              selection={["Personel", "Entreprise"]}
              onChange={() => null}
              label="Personel / Entreprise"
              type="large"
              titleEmpty
            />
            <Field placeholder="" label="Email" className="contact__input"/>
            <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
              {sending ? "En cours" : "Envoyer"}
            </Button>
          </div>
          <div className="col">
            <Field
              className="contact__input"
              placeholder="message"
              label="Message"
              type={FIELD_TYPES.TEXTAREA}
            />
          </div>
        </div>
      </form>
    </div>

  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
}

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
}

export default Form;
