'use client'
import React, { useState } from 'react';
import { mockWeek } from '@/src/mocks';
import CalendarHeader from '@/src/components/calendar/calendar-nav';
import './calendar.scss'

const Calendar: React.FC = () => {
    const [currentDay, setCurrentDay] = useState<string>('Mar 26');
  
    return (
      <div className="calendar-fullscreen">
        <CalendarHeader setCurrentDay={setCurrentDay} />
        <div className="week-grid">
          {mockWeek.map((day, index) => (
            <div key={index} className="day">
              <div className="date">{day.name}<br/>{day.date}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Calendar;