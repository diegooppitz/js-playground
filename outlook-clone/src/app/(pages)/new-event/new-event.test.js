import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewEvent from "./page";

describe("NewEvent Form", () => {
  it("should render the form correctly", () => {
    render(<NewEvent />);
    expect(screen.getByTestId("new-event-form")).toBeInTheDocument();
    expect(screen.getByTestId("title-input")).toBeInTheDocument();
    expect(screen.getByTestId("description-input")).toBeInTheDocument();
    expect(screen.getByTestId("date-input")).toBeInTheDocument();
    expect(screen.getByTestId("time-input")).toBeInTheDocument();
    expect(screen.getByTestId("attendees-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
  });

  it("should allow input fields to be updated", () => {
    render(<NewEvent />);
    const titleInput = screen.getByTestId("title-input");
    fireEvent.change(titleInput, { target: { value: "Team Meeting" } });
    expect(titleInput).toHaveValue("Team Meeting");

    const descriptionInput = screen.getByTestId("description-input");
    fireEvent.change(descriptionInput, { target: { value: "Weekly Sync" } });
    expect(descriptionInput).toHaveValue("Weekly Sync");
  });

  it("should clear input fields after form submission", async () => {
    render(<NewEvent />);
    const titleInput = screen.getByTestId("title-input");
    const descriptionInput = screen.getByTestId("description-input");
    const dateInput = screen.getByTestId("date-input");
    const timeInput = screen.getByTestId("time-input");
    const attendeesInput = screen.getByTestId("attendees-input");

    fireEvent.change(titleInput, { target: { value: "Team Meeting" } });
    fireEvent.change(descriptionInput, { target: { value: "Weekly Sync" } });
    fireEvent.change(dateInput, { target: { value: "2023-01-01" } });
    fireEvent.change(timeInput, { target: { value: "10:00" } });
    fireEvent.change(attendeesInput, {
      target: { value: "example@example.com" },
    });

    fireEvent.click(screen.getByTestId("submit-button"));

    expect(titleInput).toHaveValue("");
    expect(descriptionInput).toHaveValue("");
    expect(dateInput).toHaveValue("");
    expect(timeInput).toHaveValue("");
    expect(attendeesInput).toHaveValue("");
  });
});
