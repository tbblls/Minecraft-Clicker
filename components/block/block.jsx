import React from 'react';
import styles from './block.module.css';

const BlockButton = ({ onClick }) => {
    return (
        <button className={styles.blockButton } onClick={onClick}>
            
        </button>
    );
};

export default BlockButton;
