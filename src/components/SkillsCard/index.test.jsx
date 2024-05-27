// Importation des fonctions 'render' et 'screen' depuis la bibliothèque '@testing-library/react'
import { render, screen } from "@testing-library/react";

// Importation du composant à tester
import SkillsCard from "../SkillsCard/SkillsCard";

// Début de la suite de tests pour le composant 'SkillsCard'
describe("SkillsCard component", () => {

    // Test pour vérifier que le composant 'SkillsCard' se rend correctement avec les props fournies
    it("renders correctly with provided props", () => {

        // Rendu du composant 'SkillsCard' avec des props spécifiques
        render(<SkillsCard skillsName="React" skillsPercentage="80%" classNameBxl="bxl-react" classNameSkill="skills__bar--react" dataTestid="skills-card-testid" />)

        // Récupération de l'élément de nom de compétence par son texte
        const skillsNameElement = screen.getByText("React");

        // Récupération de l'élément de pourcentage de compétence par son texte
        const skillsPercentageElement = screen.getByText("80%");

        // Vérification que les éléments de nom et de pourcentage de compétence sont présents dans le document
        expect(skillsNameElement).toBeInTheDocument();
        expect(skillsPercentageElement).toBeInTheDocument();
    });
});
