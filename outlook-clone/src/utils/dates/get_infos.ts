import { WeekDay } from "@/types";
import { formatDateInfo, formatWeekDay } from "@/utils/dates/format_infos";

const getSunday = (d: Date): Date => {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day;
  return new Date(date.setDate(diff));
};

const today = new Date();
const sunday = getSunday(today);

const mockWeek: WeekDay[] = Array.from({ length: 7 }).map((_, index) => {
  const day = new Date(sunday);
  day.setDate(sunday.getDate() + index);

  return {
    name: formatWeekDay(day),
    date: day,
    weekDay: formatWeekDay(day),
  };
});

const {
  firstDayFormatted,
  lastDayFormatted,
  formattedRange,
} = formatDateInfo(mockWeek);

export const formattedDateInfo = {
  week: mockWeek,
  firstDay: firstDayFormatted,
  lastDay: lastDayFormatted,
  currentYear: today.getFullYear(),
  today: new Date(today),
  formattedRange: formattedRange,
};
