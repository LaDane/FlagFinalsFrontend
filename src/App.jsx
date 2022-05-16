// npm install jwt-decode

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styling/App.css";
import facade from "./apiFacade";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Navsidebar from "./components/Navbar/Navsidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Admin from "./pages/Admin";
import User from "./pages/User";
import Quiz from "./pages/Quiz";
import Navbar2 from "./components/Navbar/Navbar2";
import Highscore from "./components/Highscore/Highscore";
import Leaderboards from "./pages/Leaderboards";
import Statistics from "./pages/Statistics";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [role, setRole] = useState("");
	const [username, setUsername] = useState("");
	const [highscores, setHighscores] = useState({
		highscores: [
			{
				rank: 0,
				username: "",
				svg: "",
				points: 0,
			},
		],
	});

	const logout = () => {
		facade.logout();
		setLoggedIn(false);
		setRole("");
		setUsername("");
	};

	return (
		<div className="App">
			<Router basename="/flagfinals">
				{/* <Navbar role={role} logout={logout} /> */}
				<Navbar2 loggedIn={loggedIn} logout={logout} />
				<Highscore highscores={highscores} setHighscores={setHighscores} />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRole={setRole} setUsername={setUsername} />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/admin" element={<Admin />} />
					<Route path="/user" element={<User />} />
					<Route path="/quiz" element={<Quiz username={username} loggedIn={loggedIn} setHighscores={setHighscores} />} />
					<Route path="/leaderboards" element={<Leaderboards />} />
					<Route path="/statistics" element={<Statistics />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
