import { useState } from "react";
import Card from "../../shared/components/Card/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
const Expenses = (props) => {
  const { data } = { ...props };
  const [year, setYear] = useState("2019");
  const [filteredData, setFilteredData] = useState([...data]);

  const yearChangeHandler = (incomingYear) => {
    setYear(incomingYear);
    setFilteredData(
      data.filter((val) => val.date.getFullYear().toString() === year)
    );
  };

  // useEffect(() => {
  // }, [year]);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearChange={yearChangeHandler} />
        {filteredData.map((expense) => (
          <ExpenseItem expense={expense} key={expense.id} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
