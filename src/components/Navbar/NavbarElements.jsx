// import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #9ab0e2;
	height: 80px;
	background: #2f8dff;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1000px) / 2);
	z-index: 10;

	/* Third Nav */
	/* justify-content: flex-start; */
	font-style: italic;
	border-radius: 5px;	 

	 

`;

export const NavLink = styled(Link)`
	color: white;
	display: flex;
	border-radius: 4px;
	background: #2f8dff;
	text-transform: uppercase;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	cursor: pointer;
	padding: 10px 22px;

	&.active {
		color: black;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #9EDB9B;
		color: #010606;
	}
`;

// export const Bars = styled(FaBars)`
// 	display: none;
// 	color: #fff;

// 	@media screen and (max-width: 768px) {
// 		display: block;
// 		position: absolute;
// 		top: 0;
// 		right: 0;
// 		transform: translate(-100%, 75%);
// 		font-size: 1.8rem;
// 		cursor: pointer;
// 	}
// `;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;

	/* Second Nav */
	/* margin-right: 24px; */

	/* Third Nav */
	/* width: 100vw;
  white-space: nowrap; */

	// @media screen and (max-width: 768px) {
	// 	display: none;
	// }
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;

	/* Third Nav */
	/* justify-content: flex-end;
  width: 100vw; */

	// @media screen and (max-width: 768px) {
	// 	display: none;
	// }
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: #2f8dff;
	padding: 10px 22px;
	color: white;
	text-transform: uppercase;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	/* Second Nav */
	margin-left: 24px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #9EDB9B;
		color: #010606;
	}
`;
