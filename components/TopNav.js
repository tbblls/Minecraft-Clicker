import React, { useState, useEffect } from 'react';
import Store from './Store';
import styles from '../styles/TopNav.module.css';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.closest(`.${styles.navMenu}`) && !event.target.closest(`.${styles.menuButton}`)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.topNav}>
      <button className={styles.menuButton} onClick={toggleNav}>
        {isOpen ? 'Close Store' : 'Open Store'}
      </button>
      <div className={`${styles.navMenu} ${isOpen ? styles.open : ''}`}>
        {isOpen && <Store />}
      </div>
    </div>
  );
}
