import React, { useState } from "react";
import { connect } from "react-redux";
import "./Login.css";
import { login } from "../../actions/user.actions";

const Login = ({ dispatch }) => {
	const [fname, setfName] = useState('');
	const [lname, setlName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleFnameChange = (e) => {
		const value = e.target.value;
		setfName(value);
	}
	const handleLnameChange = (e) => {
		const value = e.target.value;
		setlName(value);
	}
	const handleEmailChange = (e) => {
		const value = e.target.value;
		setEmail(value);
	}
	const handlePasswordChange = (e) => {
		const value = e.target.value;
		setPassword(value);
	}
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(login(fname, lname, email, password))
	}

	return (
		<div className="login-form-container" onSubmit={(e) => onSubmit(e)}>
			<form id="loginForm">
				<div className="container">
					<lable>First Name</lable>
					<input type="text" placeholder="Enter First Name" name="fname"
						onChange={handleFnameChange} required />
					<lable>Last Name</lable>
					<input type="text" placeholder="Enter Last Name" name="lname"
						onChange={handleLnameChange} required />
					<lable>Email</lable>
					<input type="email" placeholder="Enter Email" name="email"
						onChange={handleEmailChange} required />
					<lable>Password</lable>
					<input type="password" placeholder="Enter Password" name="pwd"
						onChange={handlePasswordChange} required />
					<button type="submit" >Claim your gift</button>
				</div>
			</form>
		</div>
	);
}


const mapStateToProps = (state) => {
	return {
		isLoginPending: state.isLoginPending,
		isLoginSuccess: state.isLoginSuccess,
		loginError: state.loginError
	}
}

export default connect(mapStateToProps)(Login);