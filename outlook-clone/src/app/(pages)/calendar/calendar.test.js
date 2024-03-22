import Calendar from "./page";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("WelcomePage Component", () => {
  it("renders correctly", () => {
    render(<Calendar />);
    expect(screen.getByText("Calendar page")).toBeInTheDocument();
  });
});
