import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState({ title: "", message: "" });

  const submitHandler = (event) => {
    event.preventDefault();
    if (!user.name.trim() || !user.age.trim()) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Valid Name/Age",
      });
      return;
    }
    if (+user.age < 1) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Age > 1",
      });
      return;
    }
    props.onAddUser(user);
    setUser({
      name: "",
      age: "",
    });
    setError({ title: "", message: "" });
  };

  const nameChangeHandler = (event) => {
    setUser((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    setUser((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  const actionHandler = () => {
    setError({ title: "", message: "" });
  };

  return (
    <div>
      {error.title ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onAction={actionHandler}
        />
      ) : (
        ""
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.name}
            onChange={nameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={user.age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
