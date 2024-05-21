import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import "./style.scss";

const ModalEvent = ({ event }) => (
    <div className="ModalEvent">
      <div className="ModalEvent__imageContainer">
        <img
          data-testid="card-image-testid"
          src={event.cover}
          alt={event.title}
        />
      </div>
      <div className="ModalEvent__title">
        <div className="ModalEvent__titleLabel">{event.title}</div>
        <div className="ModalEvent__titlePeriode">{event.periode}</div>
      </div>
      <div className="ModalEvent__descriptionContainer">
        <h4>Description</h4>
        <div>{event.description}</div>
      </div>
      <div className="ModalEvent__descriptionContainer">
        <h4>Compétences</h4>
        {event.prestations.map((presta) => (
          <div key={presta}>{presta}</div>
        ))}
        <span><b>Github:</b><Link to={event.github}>Source code here</Link></span>
      </div>
    </div>
  );

ModalEvent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  event: PropTypes.any.isRequired,
}

export default ModalEvent;
