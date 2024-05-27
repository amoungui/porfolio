// Importation des fonctions 'fireEvent', 'render' et 'screen' depuis la bibliothèque '@testing-library/react'
import { fireEvent, render, screen } from "@testing-library/react";

// Importation du composant 'Card' depuis le répertoire courant
import Card from "./Card";

// Début de la description des tests pour le composant 'Card'
describe("Card component", () => {

  // Test spécifique pour vérifier que le composant 'Card' est rendu correctement
  it("renders correctly", () => {
    const { container } = render(<Card imageSrc="testImage.jpg" />);
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toHaveClass("work__img");
  });

  // Test spécifique pour vérifier que l'image est rendue avec la source correcte
  it("renders image with correct src", () => {
    render(<Card imageSrc="testImage.jpg" />);
    const imageElement = screen.getByRole('img');
    expect(imageElement).toHaveAttribute('src', 'testImage.jpg');
  });

  // Test spécifique pour vérifier que l'image est rendue avec le texte alternatif correct
  it("renders image with correct alt text", () => {
    render(<Card imageSrc="testImage.jpg" imageAlt="Test Image" />);
    const imageElement = screen.getByAltText('Test Image');
    expect(imageElement).toBeInTheDocument();
  });

  // Test spécifique pour vérifier que le clic sur le composant 'Card' déclenche l'événement onClick
  it("triggers onClick event when clicked", () => {
    const onClick = jest.fn();
    render(<Card imageSrc="testImage.jpg" onClick={onClick} />);
    const cardElement = screen.getByRole('img');
    fireEvent.click(cardElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
