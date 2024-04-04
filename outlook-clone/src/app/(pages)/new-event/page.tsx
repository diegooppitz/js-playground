"use client";
import React, { useState } from "react";
import { EventFormValues } from '@/types';
import styles from "./new-event.module.css";

const NewEvent: React.FC = () => {
  const initialState: EventFormValues = {
    title: "",
    description: "",
    date: "",
    time: "",
    attendees: "",
  };

  const [formValues, setFormValues] = useState<EventFormValues>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormValues(initialState);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("form values", formValues);
    alert("Event created");
    handleReset()
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.formContainer}
      data-testid="new-event-form"
    >
      <div className={styles.formGroup}>
        <label
          htmlFor="title"
          className={styles.label}
          data-testid="title-label"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formValues.title}
          onChange={handleChange}
          required
          className={styles.input}
          data-testid="title-input"
        />
      </div>
      <div className={styles.formGroup}>
        <label
          htmlFor="description"
          className={styles.label}
          data-testid="description-label"
        >
          Description:
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={formValues.description}
          onChange={handleChange}
          required
          className={styles.input}
          data-testid="description-input"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="date" className={styles.label} data-testid="date-label">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formValues.date}
          onChange={handleChange}
          required
          className={styles.input}
          data-testid="date-input"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="time" className={styles.label} data-testid="time-label">
          Time:
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formValues.time}
          onChange={handleChange}
          required
          className={styles.input}
          data-testid="time-input"
        />
      </div>
      <div className={styles.formGroup}>
        <label
          htmlFor="attendees"
          className={styles.label}
          data-testid="attendees-label"
        >
          Attendees (comma-separated emails):
        </label>
        <input
          type="text"
          id="attendees"
          name="attendees"
          value={formValues.attendees}
          onChange={handleChange}
          required
          className={styles.input}
          data-testid="attendees-input"
        />
      </div>
      <button
        type="submit"
        className={styles.button}
        data-testid="submit-button"
      >
        Create Event
      </button>
    </form>
  );
};

export default NewEvent;
