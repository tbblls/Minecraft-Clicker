import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [autoIncrementor, setAutoIncrementor] = useState(0);
  const [purchasedItems, setPurchasedItems] = useState({});

  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    const savedAutoIncrementor = localStorage.getItem('autoIncrementor');
    const savedPurchasedItems = localStorage.getItem('purchasedItems');
    if (savedScore !== null) setScore(Number(savedScore));
    if (savedAutoIncrementor !== null) setAutoIncrementor(Number(savedAutoIncrementor));
    if (savedPurchasedItems !== null) setPurchasedItems(JSON.parse(savedPurchasedItems));
  }, []);

  useEffect(() => {
    localStorage.setItem('score', score);
    localStorage.setItem('autoIncrementor', autoIncrementor);
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));
  }, [score, autoIncrementor, purchasedItems]);

  return (
    <GlobalStateContext.Provider value={{ score, setScore, autoIncrementor, setAutoIncrementor, purchasedItems, setPurchasedItems }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (key) => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return [context[key], context[`set${key.charAt(0).toUpperCase() + key.slice(1)}`]];
};
