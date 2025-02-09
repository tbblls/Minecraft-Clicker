import React, { useState } from 'react';
import styles from '../styles/Store.module.css';

export default function Store() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleStore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.menuButton} onClick={toggleStore}>
        {isOpen ? 'Close Store' : 'Open Store'}
      </button>
      <div className={`${styles.store} ${isOpen ? styles.open : ''}`}>
        <h2>Store</h2>
        {/* Add store content here */}
      </div>
    </div>
  );
}
