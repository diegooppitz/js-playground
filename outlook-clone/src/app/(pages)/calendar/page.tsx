"use client";
import React, { useEffect, useState } from "react";
import CalendarNav from "@/src/components/calendar/calendar-nav";
import { manageDayInfos } from "@/src/utils/dates/manage_infos";
import { CalendarDataTypes, WeekDay } from "@/src/types";
import "./calendar.scss";

const Calendar: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarDataTypes | null>(null);
  const [weekData, setWeekData] = useState<WeekDay[] | null>(null);
  const [currentDay, setCurrentDay] = useState<string>("Mar 26");

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/calendar");
    const data = await response.json();

    setCalendarData(data);
    if (data?.week?.length > 0) setWeekData(data.week);
  };

  const dayDateInfo = (dayData: any) => {
    const { weekDay, monthDay, dateIsToday } = manageDayInfos(dayData) || {};

  return { weekDay, monthDay, dateIsToday };
  }

  useEffect(() => {
    fetchData();
  }, []);

  const hasWeekData = weekData && weekData.length > 0; 

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
                  <div className="date-wrapper">
                    <span className="week-day">
                      {weekDay}
                    </span>
                    <span className={isToday}>
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
