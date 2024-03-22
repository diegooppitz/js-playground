import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logoSection} href='/'>
        <h1 id="header-title">Outlook Calendar</h1>
      </a>
      <div className={styles.actionSection}>
        <a className={styles.newEvent} href='/new-event'>New Event</a>
      </div>
    </header>
  );
}

export default Header;
