import jwt_decode from "jwt-decode"; 
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBox from "../components/Login/LoginBox";
import facade from "../apiFacade";

const Login = ({ loggedIn, setLoggedIn, setRole, setUsername }) => {
	const init = { username: "", password: "" };
	const [loginCredentials, setLoginCredentials] = useState(init);

	const onChange = (evt) => {
		setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
	};

	const performLogin = () => {
		login(loginCredentials.username, loginCredentials.password);
	};

	const login = (user, pass) => {
		facade.login(user, pass, setRole).then((res) => {
            setLoggedIn(true);
			setUsername(user);
            let token = facade.getToken();
            let decoded = jwt_decode(token);
            setRole(decoded.roles);

            navigate("/");
		});
	};

	const navigate = useNavigate();

	return (
		<div>
			<LoginBox loggedIn={loggedIn} onChange={onChange} performLogin={performLogin} />
		</div>
	);
};

export default Login;