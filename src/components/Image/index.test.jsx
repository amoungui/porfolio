// Importation des fonctions nécessaires depuis les bibliothèques de test
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

// Importation du composant à tester
import Image from "./Image";

// Début de la suite de tests pour le composant 'Image'
describe("Image component", () => {

    // Test pour vérifier que le composant 'Image' se rend correctement avec les props fournies
    it("renders correctly with provided props", () => {

        // Rendu du composant 'Image' avec des props spécifiques
        render(<Image imageSrc="/path/to/image.jpg" imageAlt="Test image" dataTestid="test-image-testid" />)

        // Récupération de l'élément img par son testId
        const imgElement = screen.getByTestId("test-image-testid");

        // Vérification que l'élément img a l'attribut 'src' correct
        expect(imgElement).toHaveAttribute("src", process.env.PUBLIC_URL + "/path/to/image.jpg");

        // Vérification que l'élément img a l'attribut 'alt' correct
        expect(imgElement).toHaveAttribute("alt", "Test image");

        // Vérification que l'élément img a la classe CSS correcte
        expect(imgElement).toHaveClass("feature-icon");
    });
});
