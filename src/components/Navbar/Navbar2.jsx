import React from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle, FaTrophy, FaChartBar, FaChild } from "react-icons/fa";
import "./Navbar2.css";

const Navbar2 = ({ loggedIn, logout }) => {
	const onClick = (evt, page) => {
		evt.preventDefault();
		if (loggedIn && page === "login") {
			logout();
			navigate("/");
		} else if (!loggedIn && page === "quiz") {
			navigate("/login");
		} else if (page === "leaderboards") {
			navigate("/leaderboards");
		} else if (page === "statistics") {
			navigate("/statistics");
		} else {
			navigate(`/${page}`);
		}
	};

	const navigate = useNavigate();

	return (
		<>
			{/* <div className="container-shadow-outer">
				<div className="container-shadow-inner"></div>
			</div> */}
			<div className="logo-shadow-outer">
				<div className="logo-shadow-inner"></div>
			</div>
			<div className="container">
				<button
					className="logo rmv-border"
					onClick={(e) => {
						onClick(e, "/");
					}}
				>
					<img className="logo-img" src={require("../../images/flagfinals-logo.png")} alt="logo" onClick={onClick} />
				</button>

				<div className="menu-list">
					<button
						className="menu-item rmv-border el1"
						onClick={(e) => {
							onClick(e, "quiz");
						}}
					>
						<div className="menu-item-bg-el1"></div>
						<div className="menu-item-bg-border-el1"></div>
						<i className="icon">
							<FaQuestionCircle />
						</i>
						<p className="nav-link-text b-italic">Quiz</p>
					</button>

					<button
						className="menu-item rmv-border el2"
						onClick={(e) => {
							onClick(e, "leaderboards");
						}}
					>
						<div className="menu-item-bg-el2"></div>
						<div className="menu-item-bg-border-el2"></div>
						<i className="icon">
							<FaTrophy />
						</i>
						<p className="nav-link-text b-italic">Leaderboards</p>
					</button>

					<button
						className="menu-item rmv-border el3"
						onClick={(e) => {
							onClick(e, "statistics");
						}}
					>
						<div className="menu-item-bg-el3"></div>
						<div className="menu-item-bg-border-el3"></div>
						<i className="icon">
							<FaChartBar />
						</i>
						<p className="nav-link-text f-italic">Statistics</p>
					</button>

					<button
						className="menu-item rmv-border el4"
						onClick={(e) => {
							onClick(e, "login");
						}}
					>
						<div className="menu-item-bg-el4"></div>
						<div className="menu-item-bg-border-el4"></div>
						<i className="icon">
							<FaChild />
						</i>
						<p className="nav-link-text f-italic">{loggedIn ? "Logout" : "Login"}</p>
					</button>
				</div>
			</div>
		</>
	);
};

export default Navbar2;
