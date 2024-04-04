import { WeekDay } from "@/types";

export const formatDay = (date: Date) => (`0${date.getDate()}`).slice(-2);

export const formatDateInfo = (mockWeek: WeekDay[]) => {
    const firstDayDate = new Date(mockWeek[0].date);
    const lastDayDate = new Date(mockWeek[6].date);

    const firstDayFormatted = formatDay(firstDayDate);
    const lastDayFormatted = formatDay(lastDayDate);

    const firstMonth = firstDayDate.toLocaleString("en-US", { month: "long" });
    const firstDay = formatDay(firstDayDate);
    const lastMonth = lastDayDate.toLocaleString("en-US", { month: "long" });
    const lastDay = formatDay(lastDayDate);

    const formattedRange = `${firstMonth} ${firstDay} - ${lastMonth} ${lastDay}`;

    return {
        firstDayFormatted,
        lastDayFormatted,
        firstMonth,
        firstDay,
        lastMonth,
        lastDay,
        formattedRange,
    };
};

export const formatWeekName = (date: Date): string => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
};

export const formatWeekDay = (date: Date): string => {
    return date.toLocaleDateString("en-US", { weekday: "short" });
};