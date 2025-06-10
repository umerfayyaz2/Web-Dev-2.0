import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>16 March 2025</div>

      <div className="expense-item__description">
        <h2>Car Parking</h2>
        <div className="expense-item__price">$12</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
