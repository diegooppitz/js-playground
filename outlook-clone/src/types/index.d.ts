export type CalendarDataTypes = {
  week: WeekDay[];
  firstDay: string;
  lastDay: string;
  currentYear: string | Number;
  today: Date;
  formattedRange?: string;
};

export type CalendarNavPropsTypes = {
  calendarData: CalendarDataTypes | null,
};

export type SuggestedDate = {
  selectedDate: string;
  startTime: string;
  endTime: string;
};

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  suggestedDate: SuggestedDate;
};

export type EventFormValues = {
  title: string;
  description: string;
  date: string;
  time: string;
  attendees: string;
}

export type WeekDay = {
  name: string;
  weekDay: string;
  date: Date;
};