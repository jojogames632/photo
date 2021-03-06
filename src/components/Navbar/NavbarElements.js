import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
	background: linear-gradient(to right, #6066E2, #B64B9E, #ED3F62);
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	z-index: 10;

	@media screen and (max-width: 768px) {
		padding: 0;
	}
`

export const NavLink = styled(Link)`
	color: #fff;
	white-space: nowrap;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
`

export const LogoImg = styled.img`
	height: 70px;

	@media screen and (max-width: 768px) {
		height: 50px;
	}
`

export const Bars = styled(FaBars)`
	display: none;
	color: #fff;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const SocialBtn = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`
