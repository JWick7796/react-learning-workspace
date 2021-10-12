import { useState } from "react";
import Card from "../../shared/components/Card/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const { data } = { ...props };
  const [year, setYear] = useState("2019");
  // const [filteredData, setFilteredData] = useState([...data]);

  const yearChangeHandler = (incomingYear) => {
    setYear(incomingYear);
    // setFilteredData(
    //   data.filter((val) => val.date.getFullYear().toString() === year)
    // );
  };

  // useEffect(() => {
  // }, [year]);

  const dataFiltered = data.filter(
    (val) => val.date.getFullYear().toString() === year
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selectedYear={year} onYearChange={yearChangeHandler} />
        <ExpensesChart expenses={dataFiltered} />
        <ExpensesList list={dataFiltered} />
      </Card>
    </li>
  );
};

export default Expenses;
