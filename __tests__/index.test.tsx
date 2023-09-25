import { getByAltText, render, screen } from "@testing-library/react";
import Home from "../app/(home)/page";
import "@testing-library/jest-dom";

describe("Home", () => {
  test("renders a navaigation header with logo ", () => {
    render(<Home />);

    const header = screen.getByRole("navigation");
    const logo = screen.getByAltText("Kootenay Mediation Logo");
    //const footer = screen.getByRole("footer");
    expect(header).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});
