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

describe('Calendar page', () => {
  const weekData = formattedDateInfo.week;
  it('Test the week Data content', async () => {
    render(<Calendar />);

    weekData.forEach(async (dayData, index) => {
      const dateWrapper = await screen.findByTestId(`date-wrapper-${index}`);
      const weekDay = await screen.findByTestId(`week-day-${index}`);
      const monthDay = await screen.findByTestId(`month-day-${index}`);

      expect(dateWrapper).toBeInTheDocument();
      expect(weekDay).toBeInTheDocument();
      expect(monthDay).toBeInTheDocument();

      expect(weekDay).toHaveTextContent(dayData.weekDay);
      expect(monthDay.textContent).toBeTruthy();
    });
  });

  it("Render month day correctly", async () => {
    render(<Calendar />);

    for (let index = 0; index < weekData.lenght; index++) {
      const dayData = weekData[index];
      const monthDay = await screen.findByTestId(`month-day-${index}`);
      const expectedMonthDay = new Date(dayData.date).getDate().toString();

      expect(monthDay).toHaveTextContent(expectedMonthDay);
    }
  });
});