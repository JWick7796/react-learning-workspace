import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [error, setError] = useState({ title: "", message: "" });
	let user = {};
	const submitHandler = (event) => {
		user = {
			name: nameInputRef.current.value,
			age: ageInputRef.current.value
		};
		event.preventDefault();
		if (!user.name.trim() || !user.age.trim()) {
			setError({
				title: "Invalid Input",
				message: "Please Enter Valid Name/Age"
			});
			return;
		}
		if (+user.age < 1) {
			setError({
				title: "Invalid Input",
				message: "Please Enter Age > 1"
			});
			return;
		}
		props.onAddUser(user);
		user = {
			name: "",
			age: ""
		};
		setError({ title: "", message: "" });
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
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age</label>
					<input
						id="age"
						type="number"
						value={user.age}
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
