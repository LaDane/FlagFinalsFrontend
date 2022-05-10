import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./SignupBox.css";
import facade from "../../apiFacade";

const SignupBox = ({ onChange, performSignup, responseText }) => {
	const [usernameInput, setUsernameInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const [countryInput, setCountryInput] = useState(0);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		facade.getAllCountries(setCountries, dynamicSort);
	}, []);

	const onClick = (evt) => {
		evt.preventDefault();
		performSignup();
		setUsernameInput("");
		setPasswordInput("");
	};

	function dynamicSort(property) {
		var sortOrder = 1;
		if (property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a, b) {
			var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
			return result * sortOrder;
		};
	}

	return (
		<div className="signup-box">
			<div className="wrapper">
				<header>Signup</header>
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
					<div className="signup-ddown">
						<select
							className="signup-ddown-input"
							name="countryName"
							id="countryName"
							defaultValue={"DEFAULT"}
							onChange={(e) => {
								setCountryInput(e.target.value);
							}}
						>
							<option value="DEFAULT" disabled hidden>
								Country of residence
							</option>
							{countries.map((c) => (
								<option key={c.id} value={c.countryName}>
									{c.countryName}
								</option>
							))}
						</select>
					</div>
					<button className="signup-btn" onClick={onClick}>
						Signup
					</button>
					<p className="status-text">{responseText}</p>
				</form>
			</div>
		</div>
	);
};

export default SignupBox;
