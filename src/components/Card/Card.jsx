import PropTypes from "prop-types";
import Image from '../Image/Image'
// Importation de la fonction v4 (pour générer des UUID) depuis la bibliothèque 'uuid'
import { v4 } from 'uuid';

// Création d'un alias pour la fonction v4
const uuidv4 = v4;

const Card = ({ imageSrc, imageAlt="image", dataTestid, onClick }) => (
  <div className="work__img" onClick={onClick}>
      <Image 
      data-testid={dataTestid}
      key={`Image-item-${uuidv4()}`}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      />
  </div>
);

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  onClick: PropTypes.func, // Ajout de la prop onClick
};


export default Card;
