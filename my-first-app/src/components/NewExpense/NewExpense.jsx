import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formValues, setFormValues] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [showNewExpense, setShowNewExpense] = useState(false);
  const titleInputHandler = (event) => {
    setFormValues((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountInputHandler = (event) => {
    setFormValues((prevState) => {
      return { ...prevState, amount: +event.target.value };
    });
  };

  const dateInputHandler = (event) => {
    setFormValues((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit({ ...formValues, date: new Date(formValues.date) });
    setFormValues({
      title: "",
      amount: "",
      date: "",
    });
    flipDisplay();
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setFormValues({
      title: "",
      amount: "",
      date: "",
    });
    flipDisplay();
  };

  const flipDisplay = () => {
    setShowNewExpense(!showNewExpense);
  };

  return (
    <div className="new-expense">
      {showNewExpense ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={formValues.title}
                onChange={titleInputHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={formValues.amount}
                onChange={amountInputHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={formValues.date}
                onChange={dateInputHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="reset" onClick={cancelHandler}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <div>
          <button onClick={flipDisplay}>Add Expense</button>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
