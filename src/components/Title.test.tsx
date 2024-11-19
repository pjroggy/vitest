import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import Title from "./Title";

describe("Test de mon composant Title", () => {
  it("Should render a title", async () => {
    await render(<Title title="Vite + React" />);

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("Vite + React");
  });
});