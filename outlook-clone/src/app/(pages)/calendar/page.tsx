"use client";
import React, { useEffect, useState } from "react";
import CalendarHeader from "@/src/components/calendar/calendar-nav";
import "./calendar.scss";

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

const Calendar: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarDataTypes | null>(null);
  const [weekData, setWeekData] = useState<WeekDay[] | null>(null);
  const [currentDay, setCurrentDay] = useState<string>("Mar 26");

  const formatDate = (dateInput: Date): any => {
    const date = new Date(dateInput);
    const month = date.getMonth() + 1;
    const monthDay = date.getDate();
    const year = date.getFullYear().toString().slice(-2);

    return { month, monthDay, year };
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/api/calendar");
    const data = await response.json();

    console.log(data);
    setCalendarData(data);
    if (data?.week?.length > 0) setWeekData(data.week);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const hasWeekData = weekData && weekData.length > 0;

  return (
    <div className="calendar-fullscreen">
      {hasWeekData && (
        <>
          <CalendarHeader
            setCurrentDay={setCurrentDay}
            calendarData={calendarData}
          />
          <div className="week-grid">
            {weekData.map((dayData, index) => {
              console.log("weeek data", weekData);
              const monthDay = formatDate(dayData.date).monthDay;
              const weekDay = dayData.weekDay;

              return (
                <div key={index} className="day">
                  <div className="date">
                    {monthDay}
                    {weekDay}
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
