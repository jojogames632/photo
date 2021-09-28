import React from 'react'
import styled from 'styled-components'
import Banner from '../images/Banner.png';

const PricesAndServices = () => {
	const services = [
		{
			id: 1,
			title: 'Juste moi',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: 130,
			svg: 'solo',
			info: null
		},
		{
			id: 2,
			title: 'Pour deux',
			description: 'Pour deux personnes, en extérieur ou en studio',
			price: 195,
			svg: 'multiple',
			info: null
		},
		{
			id: 3,
			title: 'Famille',
			description: 'Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio',
			price: 220,
			svg: 'multiple',
			info: '+ 30€ / personne au-delà de 4 (hormis enfant jusqu\'à 2 ans'
		},
		{
			id: 4,
			title: 'Il était une fois',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: 160,
			svg: 'solo',
			info: null
		},
		{
			id: 5,
			title: 'Mon bébé',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: 100,
			svg: 'solo',
			info: null
		},
		{
			id: 6,
			title: 'J\'immortalise l\'événement',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: '?',
			svg: 'solo',
			info: null
		},
	];

	return (
		<Main>
			<h1>Tarifs & préstations</h1>
			<ServicesContainer>
				{services.map((service, index) => {
					return (
						<Services key={index}>
							{service.svg === 'solo'
							? <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style={{ color: 'purple', position: 'absolute', top: 0, left: 0, margin: '10px'}} fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
									<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
								</svg>
							: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" style={{ color: 'purple', position: 'absolute', top: 0, left: 0, margin: '10px'}} fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
									<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
									<path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
									<path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
								</svg>}
							<TopHandband />
							<h2>{service.title}</h2>
							<Description>{service.description}</Description>
							<Cost>{service.price === '?' ? 'Sur devis' : service.price + ' €'}</Cost>
							<BotHandband />
							<BannerImg src={Banner} alt="banner" />
							<Info>{service.info ?? null}</Info>
						</Services>
					);
				})}
			</ServicesContainer>
		</Main>
	)
}

const Main = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	height: calc(100vh - 80px);
	background-color: #E9EAED;
`

const ServicesContainer = styled.div`
	display: grid;
	place-items: center;
	grid-template-columns: repeat(3, 30vw);
	margin-top: 10vh;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 40vw);
	}
`

const Services = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	box-shadow: 3px 3px 6px 2px rgba(0,0,0,0.6);
	width: 25vw;
	height: 20vh;
	margin-bottom: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #dfd8e3;
	position: relative;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		width: 35vw;
	}
`

const Description = styled.p`
	text-align: center;
	margin-top: 2vh;
	margin-bottom: 3vh;
`

const Cost = styled.span`
	position: absolute;
	bottom: 32px;
	z-index: 10;
	font-weight: bold;
`

const TopHandband = styled.div`
	background: linear-gradient(to right, #6066E2, #B64B9E, #ED3F62);
	height: 20px;
	width: 80px;
	position: absolute;
	top: 5px;
	right: -20px;
	transform: rotate(45deg);
`

const BotHandband = styled.div`
	background: linear-gradient(to right, #6066E2, #B64B9E, #ED3F62);
	height: 20px;
	width: 80px;
	position: absolute;
	bottom: 5px;
	left: -20px;
	transform: rotate(45deg);
`

const BannerImg = styled.img`
	height: 75px;
	width: 130px;
	position: absolute;
	bottom: 0px;
`

const Info = styled.span`
	position: absolute;
	bottom: 5px;
	font-size: 12px;
`

export default PricesAndServices
