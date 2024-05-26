'use client';
import React, { useEffect, useState } from 'react';
import CalendarNav from '@/components/calendar/calendar-nav';
import {
  getFormattedDateInfo,
  getEventSuggestedDate,
} from '@/utils/dates/get_infos';
import { manageDayInfos } from '@/utils/dates/manage_infos';
import { CalendarDataTypes, WeekDay } from '@/types';
import './calendar.scss';
import EventModal from '@/components/calendar/event-modal';

export const dayDateInfo = (dayData: any) => {
  const { weekDay, monthDay, dateIsToday } = manageDayInfos(dayData) || {};
  return { weekDay, monthDay, dateIsToday };
};

const Calendar: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [suggestedDate, setSuggestedDate] = useState({
    selectedDate: '',
    startTime: '',
    endTime: '',
  });
  const [weekToGo, setWeekToGo] = useState<number>(0);

  const calendarData: CalendarDataTypes = getFormattedDateInfo(weekToGo);
  const weekData: WeekDay[] = getFormattedDateInfo(weekToGo).week;
  const hasWeekData = weekData?.length > 0;

  const formatDate = (date: Date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const getSuggestedDate = async (selectedDate: string) => {
    const initialEventData = getEventSuggestedDate();
    setSuggestedDate({ selectedDate, ...initialEventData });
  };

  const openEventModal = async (selectedDate: string) => {
    await getSuggestedDate(selectedDate);

    setModalIsOpen(true);
  };

  const fetchEventsData = async () => {
    console.log('aqui');
    try {
      const response = await fetch('/api/calendar', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const eventsData = await response.json();

      console.log('events data', eventsData);
    } catch (error) {
      console.error('request error:', error);
    }
  };

  useEffect(() => {
    fetchEventsData();
  }, []);

  return (
    <div data-testid="calendar-fullscreen" className="calendar-fullscreen">
      {hasWeekData && (
        <>
          <CalendarNav
            calendarData={calendarData}
            setWeekToGo={setWeekToGo}
            weekToGo={weekToGo}
          />

          <div className="week-grid">
            {weekData.map((dayData, index) => {
              const { monthDay, weekDay, dateIsToday } =
                dayDateInfo(dayData) || {};

              const isToday = dateIsToday
                ? 'date-day-today date-day'
                : 'date-day';

              return (
                <div
                  key={index}
                  className="date-column"
                  onClick={() => openEventModal(formatDate(dayData.date))}
                >
                  <div
                    data-testid={`date-wrapper-${index}`}
                    className="date-wrapper"
                  >
                    <span
                      data-testid={`week-day-${index}`}
                      className="week-day"
                    >
                      {weekDay}
                    </span>
                    <span
                      data-testid={`month-day-${index}`}
                      className={isToday}
                    >
                      {monthDay}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <EventModal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            suggestedDate={suggestedDate}
          />
        </>
      )}
    </div>
  );
};

export default Calendar;
