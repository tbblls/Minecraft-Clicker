import React from 'react';
import { useGlobalState } from '../state';
import styles from '../styles/Store.module.css';

const items = [
  { id: 1, name: 'Diamond Sword', cost: 100 },
  { id: 2, name: 'Iron Pickaxe', cost: 50 },
  { id: 3, name: 'Golden Apple', cost: 75 },
  { id: 4, name: 'Enchanted Book', cost: 150 },
  { id: 5, name: 'Netherite Ingot', cost: 200 },
];

export default function Store() {
  const [score, setScore] = useGlobalState('score');
  const [autoIncrementor, setAutoIncrementor] = useGlobalState('autoIncrementor');
  const [purchasedItems, setPurchasedItems] = useGlobalState('purchasedItems');

  const handlePurchase = (id, cost) => {
    if (score >= cost) {
      setScore(score - cost);
      setAutoIncrementor(autoIncrementor + Math.round(cost * 0.1));
      setPurchasedItems({
        ...purchasedItems,
        [id]: (purchasedItems[id] || 0) + 1,
      });
    }
  };

  return (
    <div className={styles.store}>
      <h2>Store</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.cost} points
            <button onClick={() => handlePurchase(item.id, item.cost)} disabled={score < item.cost}>
              Buy
            </button>
            <span> Bought: {purchasedItems[item.id] || 0}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
