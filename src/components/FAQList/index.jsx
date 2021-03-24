import React, { useState } from 'react';
import './style.scss';
import { faqList } from '../../constants/data/content';

function FAQList() {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleActiveItems = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(el => el !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  return (
      <div className="list-wrapper">
        <h1>FAQ</h1>
        <div className="list">
          {faqList.map(item => (
            <div
              key={`list-item-${item.id}`}
              className={`list-item ${selectedItems.includes(item.id) ? 'active' : ''}`}
              onClick={() => toggleActiveItems(item.id)}
            >
              <div className="list-item-header">
                <h3>{item.title}</h3>
                <img src="/assets/icon-arrow-down.svg" alt="arrow icon"/>
              </div>
              <div className="list-item-content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default FAQList;
