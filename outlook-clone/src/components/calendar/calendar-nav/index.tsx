import React from "react";
import { manageWeekInfos } from "@/utils/dates/manage_infos";
import { CalendarNavProps } from "@/types";
import "./calendarNav.scss";

const CalendarNav: React.FC<CalendarNavProps> = ({ setCurrentDay, calendarData }) => {
  const dateInfos = (): any => {
    const { formattedRange } = manageWeekInfos(calendarData) || {};
    if (!formattedRange) return null;

    return formattedRange;
  };

  const formattedRange = dateInfos();

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
        {formattedRange && (
          <div className="calendar-nav-group">
            <div data-testid="calendar-nav-date-range" className="calendar-nav-date-range">
              {formattedRange}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default CalendarNav;
