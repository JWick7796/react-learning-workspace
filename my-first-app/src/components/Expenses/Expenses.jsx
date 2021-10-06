import Card from "../../shared/components/Card/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const { data } = { ...props };
  return (
    <Card className="expenses">
      {data.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id} />
      ))}
    </Card>
  );
};

export default Expenses;
