export type WeekDay = {
    name: string;
    weekDay: string;
    date: Date;
};

export type CalendarDataTypes = {
    week: WeekDay;
    firstDay: string;
    lastDay: string;
    currentYear: string;
    today: Date;
  };

  export type CalendarNavProps = {
    setCurrentDay: (day: string) => void;
    calendarData: CalendarDataTypes | null,
  };

  export type EventFormValues = {
    title: string;
    description: string;
    date: string;
    time: string;
    attendees: string;
  }