import { useState } from "react";
import Card from "../../shared/components/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [state, setState] = useState(props.expense);
  console.log(props);
  const day = state.date.toLocaleString("en-US", { day: "2-digit" });
  const month = state.date.toLocaleString("en-US", { month: "long" });
  const year = state.date.getFullYear();

  const changeTitleHandler = () => {
    setState({ ...props.expense, title: "Booyah Bitches" });
  };

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{year}</div>
        <div className="expense-date__year">{month}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{state.title}</h2>
        <div className="expense-item__price">${state.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
