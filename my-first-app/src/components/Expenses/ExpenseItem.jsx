import Card from "../../shared/components/Card/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const day = props.expense.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.expense.date.toLocaleString("en-US", { month: "long" });
  const year = props.expense.date.getFullYear();

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{year}</div>
        <div className="expense-date__year">{month}</div>
        <div className="expense-date__day">{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
