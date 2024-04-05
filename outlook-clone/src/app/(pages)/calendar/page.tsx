"use client";
import React, { useEffect, useState } from "react";
import CalendarNav from "@/components/calendar/calendar-nav";
import { formattedDateInfo } from "@/utils/dates/get_infos";
import { manageDayInfos } from "@/utils/dates/manage_infos";
import { CalendarDataTypes, WeekDay } from "@/types";
import "./calendar.scss";

const Calendar: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<string>("Mar 26");

  const calendarData: CalendarDataTypes = formattedDateInfo;
  const weekData: WeekDay[] = formattedDateInfo.week;
  const hasWeekData = weekData?.length > 0; 

  const dayDateInfo = (dayData: any) => {
    const { weekDay, monthDay, dateIsToday } = manageDayInfos(dayData) || {};

  return { weekDay, monthDay, dateIsToday };
  }

  return (
    <div className="calendar-fullscreen">
      {hasWeekData && (
        <>
          <CalendarNav
            setCurrentDay={setCurrentDay}
            calendarData={calendarData}
          />
          <div className="week-grid">
            {weekData.map((dayData, index) => {
              const { monthDay, weekDay, dateIsToday } = dayDateInfo(dayData) || {};

              const isToday = dateIsToday ? 'date-day-today date-day' : 'date-day';

              return (
                <div key={index} className="day">
                  <div data-testid={`date-wrapper-${index}`} className="date-wrapper">
                    <span data-testid={`week-day-${index}`} className="week-day">
                      {weekDay}
                    </span>
                    <span data-testid={`month-day-${index}`} className={isToday}>
                      {monthDay}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Calendar;
