import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({
  type = FIELD_TYPES.INPUT_TEXT,
  label = "",
  name = "field-name",
  placeholder = "",
  onChange,
}) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          id={`${name}-${label.toLowerCase()}`}
          name={`${name}-${label.toLowerCase()}`}
          placeholder={placeholder}
          data-testid="field-testid"
          onChange={onChange}
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = (
        <textarea
          id={`${name}-${label.toLowerCase()}`}
          name={`${name}-${label.toLowerCase()}`}
          data-testid="field-testid"
          onChange={onChange}
        />
      );
      break;
    default:
      component = (
        <input
          type="text"
          id={`${name}-${label.toLowerCase()}`}
          name={`${name}-${label.toLowerCase()}`}
          placeholder={placeholder}
          data-testid="field-testid"
          onChange={onChange}
        />
      );
  }
  return (
    <div className="inputField">
      <label htmlFor={`${name}-${label.toLowerCase()}`} className="label">
        {label}
      </label>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Field;
