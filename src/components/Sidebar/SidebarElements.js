import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const Background = styled.div`
	background: linear-gradient(#6066E2, #B64B9E, #ED3F62);
	position: fixed;
	top: ${ ({ isOpen }) => (isOpen ? '0' : '-100%') };
	opacity: ${ ({ isOpen }) => (isOpen ? '100%' : '0') };
	bottom: 0;
	height: 100%;
	width: 100%;
	z-index: 10;
	transition: 0.4s ease-in-out;
`

export const CloseBtn = styled(FaTimes)`
	color: black;
	position: absolute;
	top: 0.8rem;
	right: 1.2rem;
	font-size: 45px;
	cursor: pointer;
`

export const Menu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 40vh;
	margin-top: 25vh;
`

export const MobileLink = styled(Link)`
	text-decoration: none;
	color: white;
	font-size: 30px;
`