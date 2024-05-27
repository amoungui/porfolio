// Importation des fonctions 'fireEvent', 'render' et 'screen' depuis la bibliothèque '@testing-library/react'
import { fireEvent, render, screen } from "@testing-library/react";

// Importation du composant 'Select' depuis le répertoire courant
import Select from "../Select/Select";

// Début du block describe des tests pour le composant 'Select'
describe("When a select is created", () => {

  // Test spécifique pour vérifier qu'une liste de choix est affichée
  it("a list of choices is displayed", async () => {

    // Rendu du composant 'Select' avec une sélection spécifique
    render(<Select selection={["value1", "value2"]} />);

    // Récupération du bouton de repliement par son testId
    const collapseButtonElement = screen.getByTestId(
      "collapse-button-testid"
    );

    // Déclenchement d'un événement de clic sur le bouton de repliement
    fireEvent.click(collapseButtonElement);

    // Récupération des éléments de choix par leur texte
    const choice1 = await screen.findByText("value1");
    const choice2 = await screen.findByText("value2");

    // Vérification que les éléments de choix sont présents dans le document
    expect(choice1).toBeInTheDocument();
    expect(choice2).toBeInTheDocument();
  });

  // Sous-groupe de tests pour le cas où un clic est déclenché sur un élément de choix
  describe("and a click is triggered on a choice item", () => {

    // Test spécifique pour vérifier qu'un rappel onChange est appelé
    it("a onChange callback is called", () => {

      // Création d'une fonction mock pour l'événement onChange
      const onChange = jest.fn();

      // Rendu du composant 'Select' avec une sélection et un événement onChange spécifiques
      render(<Select selection={["value1", "value2"]} onChange={onChange} />);

      // Récupération du bouton de repliement par son testId
      const collapseButtonElement = screen.getByTestId(
        "collapse-button-testid"
      );

      // Déclenchement d'un événement de clic sur le bouton de repliement
      fireEvent(
        collapseButtonElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      // Récupération de l'élément de choix par son texte
      const choice1 = screen.getByText("value1");

      // Déclenchement d'un événement de clic sur l'élément de choix
      fireEvent(
        choice1,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      // Vérification que l'événement onChange a été appelé au moins une fois
      expect(onChange.mock.calls.length).toBeGreaterThan(0);

      // Déclenchement d'un deuxième événement de clic sur le bouton de repliement
      fireEvent(
        collapseButtonElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      // Récupération de l'élément de choix "Toutes" par son texte
      const choiceAll = screen.getByText("Toutes");

      // Déclenchement d'un événement de clic sur l'élément de choix "Toutes"
      fireEvent(
        choiceAll,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );

      // Vérification que l'événement onChange a été appelé plus d'une fois
      expect(onChange.mock.calls.length).toBeGreaterThan(1);
    });
  });
});


