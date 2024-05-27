// Importation des fonctions 'render', 'screen' et 'within' depuis la bibliothèque '@testing-library/react'
import { render, screen, within } from "@testing-library/react";

// Importation de la fonction 'md5' depuis la bibliothèque 'md5'
import md5 from "md5";

// Importation du composant 'Icon' depuis le répertoire courant
import Icon from "./Icon";

// Début de la suite du block describe des tests pour le composant 'Icon'
describe("Icon component", () => {

    // Sous-groupe de tests pour le cas où une icône est créée avec le nom 'twitch'
    describe("When a icon is created with name twitch", () => {

        // Test spécifique pour vérifier que l'icône contient une valeur de hachage spécifique
        it("the icon contain this path hash value 327fbc38c8e878259c3ec35ef231517a", () => {

            // Rendu de l'icône avec le nom 'twitch'
            render(<Icon name="twitch" />)

            // Récupération de l'élément svg par son testId
            const svgElement = screen.getByTestId("icon");

            // Récupération de tous les éléments path à l'intérieur de l'élément svg
            const pathElements = within(svgElement).queryAllByTestId('icon');

            // Parcours de tous les éléments path et vérification que la valeur de hachage MD5 de l'attribut 'd' correspond à la valeur attendue
            pathElements.forEach(pathElement => {
                expect(md5(pathElement.getAttribute('d'))).toEqual('327fbc38c8e878259c3ec35ef231517a')
            });
        });
    });

    // Sous-groupe de tests pour le cas où une icône est créée avec le nom 'facebook'
    describe("When an icon is created with name facebook", () => {

        // Test spécifique pour vérifier que l'icône contient une valeur de hachage spécifique
        it("the icon contains this path hash value bbea4c9e40773b969fdb6e406059f853", () => {

            // Rendu de l'icône avec le nom 'facebook'
            render(<Icon name="facebook" />)

            // Récupération de l'élément svg par son testId
            const svgElement = screen.getByTestId("icon");

            // Récupération de tous les éléments path à l'intérieur de l'élément svg
            const pathElements = within(svgElement).queryAllByTestId('icon');

            // Parcours de tous les éléments path et vérification que la valeur de hachage MD5 de l'attribut 'd' correspond à la valeur attendue
            pathElements.forEach(pathElement => {
                expect(md5(pathElement.getAttribute('d'))).toEqual('bbea4c9e40773b969fdb6e406059f853')
            });
        });
    });
});
