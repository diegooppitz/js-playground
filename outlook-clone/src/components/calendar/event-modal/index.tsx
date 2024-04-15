import React from 'react';
import './eventModal.scss';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, selectedDate }) => {
  if (!isOpen) return null;

  console.log("selected date", selectedDate)

  return (
    <div className='modal'>
      <div className='modalContent'>
        <span className='close' onClick={onClose}></span>
        <h2>Event Modal</h2>
        <p>This is the event modal</p>
      </div>
    </div>
  );
};

export default EventModal;
