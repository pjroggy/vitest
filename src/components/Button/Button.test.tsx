import { screen, render, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./Button";

describe("Test de mon composant Button", () => {
  it("Should increment count on button click", async () => {
    // Rendu du composant
    render(<Button />);

    // Sélection du bouton
    const button = screen.getByRole("button", { name: /count is 0/i });

    // Vérification initiale
    expect(button).toHaveTextContent("count is 0");

    // Simuler un clic
    fireEvent.click(button);

    // Vérification après le clic
    expect(button).toHaveTextContent("count is 1");

    // Simuler un deuxième clic
    fireEvent.click(button);

    // Vérification après le deuxième clic
    expect(button).toHaveTextContent("count is 2");
  });
});
