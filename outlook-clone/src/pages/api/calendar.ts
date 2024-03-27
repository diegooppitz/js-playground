import { NextApiRequest, NextApiResponse } from "next";

type WeekDay = {
  name: string;
  date: Date;
};

const getMonday = (d: Date): Date => {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};

const getWeekDay = (date: Date): string => {
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return weekDays[date.getDay()];
  };

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const today = new Date();
  const monday = getMonday(today);

  const mockWeek: WeekDay[] = Array.from({ length: 7 }).map((_, index) => {
    const day = new Date(monday);
    day.setDate(monday.getDate() + index);

    return {
      name: day.toLocaleDateString("en-US", { weekday: "long" }),
      date: day,
      weekDay: getWeekDay(day),
    };
  });

  const firstDayDate = new Date(mockWeek[0].date);
  const lastDayDate = new Date(mockWeek[6].date);

  res.status(200).json({
    week: mockWeek,
    firstDay: firstDayDate,
    lastDay: lastDayDate,
    currentYear: today.getFullYear(),
    today: new Date(today),
  });
};

export default handler;
