"use client";
import React, { useState } from "react";
import CalendarNav from "@/components/calendar/calendar-nav";
import { formattedDateInfo } from "@/utils/dates/get_infos";
import { manageDayInfos } from "@/utils/dates/manage_infos";
import { CalendarDataTypes, WeekDay } from "@/types";
import "./calendar.scss";
import EventModal from "@/components/calendar/event-modal";
import { set } from "node_modules/cypress/types/lodash";

export const dayDateInfo = (dayData: any) => {
  const { weekDay, monthDay, dateIsToday } = manageDayInfos(dayData) || {};
  return { weekDay, monthDay, dateIsToday };
};

const Calendar: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<string>("Mar 26");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const calendarData: any = formattedDateInfo;
  const weekData: WeekDay[] = formattedDateInfo.week;
  const hasWeekData = weekData?.length > 0; 

  const openEventModal = (newSelectedDate: Date) => {
    setSelectedDate(newSelectedDate);
    setModalIsOpen(true);
  }

  return (
    <div data-testid="calendar-fullscreen" className="calendar-fullscreen">
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
                <div key={index} className="date-column" onClick={() => openEventModal(dayData.date)}>
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

          <EventModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} selectedDate={selectedDate} />
        </>
      )}
    </div>
  );
};

export default Calendar;
