// Importation de PropTypes pour la validation des props
import PropTypes from "prop-types";

// Définition du composant Image
const Image = ({ imageSrc, imageAlt="image", dataTestid="feature-item-image-testid" }) => {

    // Rendu du composant Image
    return (
        // Début de l'élément img avec les attributs src, alt, className et data-testid
        <img
            data-testid= {dataTestid} // Attribut data-testid pour les tests
            src={process.env.PUBLIC_URL + imageSrc} // Source de l'image
            alt={imageAlt} // Texte alternatif de l'image
            className="feature-icon" // Classe CSS de l'image
        /> // Fin de l'élément img
    )
}

// Validation des props du composant Image
Image.propTypes = {
    imageSrc: PropTypes.string.isRequired, // La source de l'image est requise et doit être une chaîne de caractères
    imageAlt: PropTypes.string, // Le texte alternatif de l'image doit être une chaîne de caractères
    dataTestid: PropTypes.string, // L'ID de test doit être une chaîne de caractères
};

// Exportation du composant Image pour être utilisé dans d'autres parties de l'application
export default Image;
