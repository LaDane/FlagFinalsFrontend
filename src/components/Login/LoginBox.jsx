import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginBox.css";

const LoginBox = ({ loggedIn, onChange, performLogin }) => {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const onClick = (evt) => {
		evt.preventDefault();
		performLogin();
		setUsernameInput("");
		setPasswordInput("");
	};

	const onClickSignup = (evt) => {
		evt.preventDefault();
		navigate("/signup");
	};

	const navigate = useNavigate();

	return (
		// <div className="login-box app__body">
		<div className="login-box">
			<div className="login-wrapper">
				<header>Login</header>
				<form onChange={onChange}>
					<div className="field email">
						<div className="input-area">
							<input
								type="text"
								placeholder="Username"
								id="username"
								value={usernameInput}
								onChange={(e) => {
									setUsernameInput(e.target.value);
								}}
							/>
							<i className="icon">
								<FaEnvelope />
							</i>
						</div>
					</div>
					<div className="field password">
						<div className="input-area">
							<input
								type="password"
								placeholder="Password"
								id="password"
								value={passwordInput}
								onChange={(e) => {
									setPasswordInput(e.target.value);
								}}
							/>
							<i className="icon">
								<FaLock />
							</i>
						</div>
					</div>
					<button className="login-btn" onClick={onClick}>
						Login
					</button>
					{/* <p className="status-text">{responseText}</p> */}
					<p className="login-signup-text">Don't have an account?</p>
					<button className="login-singup-btn rmv-border" onClick={onClickSignup}>
						Signup here!
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginBox;
