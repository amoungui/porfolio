import { render, screen } from "@testing-library/react";
import ModalEvent from "../ModalEvent/ModalEvent";
import { MemoryRouter } from "react-router-dom";

describe("ModalEvent", () => {
  const mockEvent = {
    type: "Immobilier",
    date: "2022-04-29T20:28:45.744Z",
    title: "Kasa",
    cover: "/assets/img/work1.webp",
    description: "Plateforme immobilière.",
    github: "https://github.com/amoungui/kasa-using-reactjs",
    periode: "14-15-16 Avril",
    prestations: ["JS/React 35.9% SCSS 34.5% CSS 26.7% HTML 2.9%"],
  };

  it("should display the image", () => {
    render(
      <MemoryRouter>
        <ModalEvent event={mockEvent} />
      </MemoryRouter>
    );
    const image = screen.getByTestId("card-image-testid");
    expect(image).toHaveAttribute("src", mockEvent.cover);
    expect(image).toHaveAttribute("alt", mockEvent.title);
  });

  it("should display the title", () => {
    render(
      <MemoryRouter>
        <ModalEvent event={mockEvent} />
      </MemoryRouter>
    );
    expect(screen.getByText(mockEvent.title)).toBeInTheDocument();
  });

});
