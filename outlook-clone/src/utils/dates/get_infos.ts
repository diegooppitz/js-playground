import { CalendarDataTypes, WeekDay } from "@/types";
import { formatDateInfo, formatWeekDay } from "@/utils/dates/format_infos";
import { findSundayInfo } from "./manage_infos";

const getSunday = (): Date => {
  return findSundayInfo();
};

const getToday = (): Date => {
  return new Date();
};

const getWeek = (weekToGo: number): WeekDay[] => {
  const sunday = getSunday();
  const targetSunday = new Date(sunday);
  targetSunday.setDate(sunday.getDate() + (weekToGo * 7));

  const week = Array.from({ length: 7 }).map((_, index) => {
    const day = new Date(targetSunday);
    day.setDate(targetSunday.getDate() + index);

    return {
      name: formatWeekDay(day),
      date: day,
      weekDay: formatWeekDay(day),
    };
  });

  return week;
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


export const getFormattedDateInfo = (weekToGo: number = 0): CalendarDataTypes => {
  const {
    firstDayFormatted,
    lastDayFormatted,
    formattedRange,
  } = formatDateInfo(getWeek(weekToGo));

  return {
    week: getWeek(weekToGo),
    firstDay: firstDayFormatted,
    lastDay: lastDayFormatted,
    currentYear: getToday().getFullYear(),
    today: getToday(),
    formattedRange: formattedRange,
  }
};
