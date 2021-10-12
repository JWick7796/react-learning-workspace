import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.list.length > 0) {
    return (
      <ul className="expenses-list">
        {props.list.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </ul>
    );
  }
  return <h2 className="expenses-list__fallback">No Expenses, GG</h2>;
};

export default ExpensesList;
