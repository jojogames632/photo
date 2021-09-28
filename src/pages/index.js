import React from 'react'
import styled from 'styled-components';
import Background from '../images/home-background.jpg';

const Home = () => {
	return (
		<Main>
			<Title>Charles Cantin - Photographe</Title>
		</Main>
	)
}

const Main = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100vh - 80px);
	background-image: url(${Background});
	background-size: cover;
	background-position: center;
	white-space: nowrap;
`

const Title = styled.h1`
	color: #d288e3;
	font-size: 50px;

	@media screen and (max-width: 768px) {
		font-size: 22px;
	}
`

export default Home
