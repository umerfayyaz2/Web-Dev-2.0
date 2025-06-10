import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = () => {
  const expenseDate = new Date(2025, 1, 1);
  const expenseTitle = "Car Parking";
  const expenseAmount = 12;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
