import React from "react";
import "./calendarNav.scss";

type CalendarNavProps = {
  setCurrentDay: (day: string) => void;
};

const CalendarNav: React.FC<CalendarNavProps> = ({ setCurrentDay }) => {
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
          <div className="calendar-nav-date-range">March 24-30, 2024</div>
          <button className="calendar-nav-dropdown-button">
            <i className="fa fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarNav;
