import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calendar from "./page";
import { formattedDateInfo } from "@/utils/dates/get_infos";

beforeAll(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(formattedDateInfo) }));
});

afterAll(() => {
  global.fetch.mockClear();
  delete global.fetch;
});

describe("Calendar Component", () => {
  it("renders correctly", async () => {
    render(<Calendar />);
    const weekData = formattedDateInfo.week;

    for (let i = 0; i < weekData.length; i++) {
      const dateWrapper = await screen.findByTestId(`date-wrapper-${i}`);
      const weekDay = await screen.findByTestId(`week-day-${i}`);
      const monthDay = await screen.findByTestId(`month-day-${i}`);

      expect(dateWrapper).toBeInTheDocument();
      expect(weekDay).toBeInTheDocument();
      expect(monthDay).toBeInTheDocument();
    }
  });
});