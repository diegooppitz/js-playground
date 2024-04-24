import { CalendarDataTypes, WeekDay } from "@/types";
import { formatDateInfo, formatWeekDay } from "@/utils/dates/format_infos";
import { findSundayInfo } from "./manage_infos";

const getSunday = (): Date => {
  return findSundayInfo();
};

const getToday = (): Date => {
  return new Date();
};

const mockWeek: WeekDay[] = Array.from({ length: 7 }).map((_, index) => {
  const day = new Date(getSunday());
  day.setDate(getSunday().getDate() + index);

  return {
    name: formatWeekDay(day),
    date: day,
    weekDay: formatWeekDay(day),
  };
});


export const getFormattedDateInfo = (): CalendarDataTypes => {
  const {
    firstDayFormatted,
    lastDayFormatted,
    formattedRange,
  } = formatDateInfo(mockWeek);

  return {
    week: mockWeek,
    firstDay: firstDayFormatted,
    lastDay: lastDayFormatted,
    currentYear: getToday().getFullYear(),
    today: getToday(),
    formattedRange: formattedRange,
  }
};
