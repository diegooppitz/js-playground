"use client";
import React, { useState } from "react";
import CalendarNav from "@/components/calendar/calendar-nav";
import { getFormattedDateInfo } from "@/utils/dates/get_infos";
import { manageDayInfos } from "@/utils/dates/manage_infos";
import { CalendarDataTypes, WeekDay } from "@/types";
import "./calendar.scss";
import EventModal from "@/components/calendar/event-modal";

export const dayDateInfo = (dayData: any) => {
  const { weekDay, monthDay, dateIsToday } = manageDayInfos(dayData) || {};
  return { weekDay, monthDay, dateIsToday };
};

const Calendar: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [suggestedDate, setSuggestedDate] = useState({ selectedDate: '', startTime: '', endTime: '' });

  const calendarData: CalendarDataTypes = getFormattedDateInfo();
  const weekData: WeekDay[] = getFormattedDateInfo().week;
  const hasWeekData = weekData?.length > 0;

  const getCurrentTimeFormatted = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const getNextRoundedTime = (formattedCurrentTime: string, skipTime: number) => {
    const [currentHours, currentMinutes] = formattedCurrentTime.split(':').map(Number);
    let nextRoundedTime = new Date();

    if (currentMinutes > skipTime) {
      nextRoundedTime.setHours(currentHours + 1);
      nextRoundedTime.setMinutes(0);
    } else {
      nextRoundedTime.setMinutes(skipTime);
    }

    const nextSuggestedHours = String(nextRoundedTime.getHours()).padStart(2, '0');
    const nextSuggestedMinutes = String(nextRoundedTime.getMinutes()).padStart(2, '0');
    return `${nextSuggestedHours}:${nextSuggestedMinutes}`;
  };

  const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const openEventModal = (selectedDate: string) => {
    const formattedCurrentTime = getCurrentTimeFormatted();
    const startTime = getNextRoundedTime(formattedCurrentTime, 30);
    const endTime = getNextRoundedTime(formattedCurrentTime, 60);
    setSuggestedDate({ selectedDate, startTime, endTime });

    setModalIsOpen(true);
  }

  return (
    <div data-testid="calendar-fullscreen" className="calendar-fullscreen">
      {hasWeekData && (
        <>
          <CalendarNav calendarData={calendarData} />

          <div className="week-grid">
            {weekData.map((dayData, index) => {
              const { monthDay, weekDay, dateIsToday } = dayDateInfo(dayData) || {};

              const isToday = dateIsToday ? 'date-day-today date-day' : 'date-day';

              return (
                <div key={index} className="date-column" onClick={() => openEventModal(formatDate(dayData.date))}>
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

          <EventModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} suggestedDate={suggestedDate} />
        </>
      )}
    </div>
  );
};

export default Calendar;
