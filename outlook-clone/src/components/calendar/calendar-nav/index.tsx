import React from "react";
import "./calendarNav.scss";

type WeekDay = {
  name: string;
  date: Date;
};

type CalendarDataTypes = {
  week: WeekDay;
  firstDay: string;
  lastDay: string;
  currentYear: string;
  today: Date;
};

type CalendarNavProps = {
  setCurrentDay: (day: string) => void;
  calendarData: CalendarDataTypes,
};

const CalendarNav: React.FC<CalendarNavProps> = ({ setCurrentDay, calendarData }) => {


  const dateInfos = (): any => {
    // const month = date.getMonth() + 1; // ???
    const firstDay = calendarData.firstDay;
    const lastDay = calendarData.lastDay;
    const currentYear = calendarData.currentYear;

    return `[MONTH] ${firstDay} - ${lastDay}, ${currentYear}`;
  };


  return (
    <div className="calendar-nav">
      <div className="calendar-nav-controls">
        <button
          className="calendar-nav-today-button"
          onClick={() => setCurrentDay("Mar 26")}
        >
          Today
        </button>
        <div className="calendar-nav-group">
          <button className="calendar-nav-navigation-button" onClick={() => {}}>
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="calendar-nav-navigation-button" onClick={() => {}}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
        <div className="calendar-nav-group">
          <div className="calendar-nav-date-range">{dateInfos()}</div>
        </div>
      </div>
    </div>
  );
};

export default CalendarNav;
