import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import Image from '../Image/Image'
// Importation de la fonction v4 (pour générer des UUID) depuis la bibliothèque 'uuid'
import { v4 } from 'uuid';

// Création d'un alias pour la fonction v4
const uuidv4 = v4;

const Card = ({
  imageSrc,
  imageAlt,
  dataTestid,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
    <Link to="/" className="work__img">
        <Image 
        data-testid={dataTestid}
        key={`Image-item-${uuidv4()}`}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        />
    </Link>

  );

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  date: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  small: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
  
Card.defaultProps = {
  imageAlt: "image",
  small: false,
}

export default Card;
