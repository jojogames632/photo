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
			info: '+ 30€ / personne au-delà de 4 (hormis enfant jusqu\'à 2 ans)'
		},
		{
			id: 4,
			title: 'Il était une fois',
			description: 'Photo de grossesse (À votre domicile, en extérieur ou en studio)',
			price: 160,
			svg: 'solo',
			info: null
		},
		{
			id: 5,
			title: 'Mon bébé',
			description: 'Photo d\'enfant jusqu\'à 3 ans (photo à domicile)',
			price: 100,
			svg: 'solo',
			info: null
		},
		{
			id: 6,
			title: 'J\'immortalise l\'événement',
			description: 'Prestation de mariage ou baptême sur devis',
			price: '?',
			svg: 'solo',
			info: null
		},
	];

	return (
		<Main>
			<MainTitle>Tarifs & prestations</MainTitle>
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
							<Title>{service.title}</Title>
							<Description>{service.description}</Description>
							<Cost>{service.price === '?' ? 'Sur devis' : service.price + ' €'}</Cost>
							<BannerImg src={Banner} alt="banner" />
							<Info>{service.info ?? null}</Info>
							<BotHandband />
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

const MainTitle = styled.h1`
	margin-top: 15px;	

	@media screen and (min-width: 1024px) and (max-width: 1199px) {
		font-size: 30px;
	}

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		font-size: 25px;
	}

	@media screen and (max-width: 767px) {
		font-size: 20px;
	};
`

const Title = styled.h2`
	margin-top: 60px;

	@media screen and (min-width: 1024px) and (max-width: 1199px) {
		font-size: 25px;
	}

	@media screen and (min-width: 769px) and (max-width: 1199px) {
		margin-top: 25px;
	}
	
	@media screen and (max-width: 768px) {
		font-size: 18px;
		margin-top: 14px;
	}
`

const ServicesContainer = styled.div`
	display: grid;
	place-items: center;
	grid-template-columns: repeat(3, 32vw);
	margin-top: 4vh;
	overflow: scroll;

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		grid-template-columns: repeat(2, 50vw);
		margin-top: 40px;
	}

	@media screen and (max-width: 767px) {
		grid-template-columns: repeat(1, 100vw);
		margin-top: 40px;
	}	
`

const Services = styled.div`
	border: 1px solid black;
	border-radius: 10px;
	box-shadow: 3px 3px 6px 2px rgba(0,0,0,0.6);
	width: 30vw;
	height: 250px;
	margin-bottom: 5vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #dfd8e3;
	position: relative;
	overflow: hidden;

	@media screen and (min-width: 1200px) and (max-width: 1440px) {
		height: 30vh;
		height: 250px;
	}

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		width: 45vw;
		height: 220px;
	}	
	
	@media screen and (max-width: 767px) {
		width: 90vw;
		height: 200px;
	}
`

const Description = styled.p`
	text-align: center;
	margin-top: 50px;
	margin-bottom: 3vh;
	font-size: 14px;

	@media screen and (min-width: 1200px) and (max-width: 1440px) {
		margin-top: 25px;
	}

	@media screen and (min-width: 1024px) and (max-width: 1199px) {
		font-size: 18px;
	}

	@media screen and (max-width: 767px) {
		font-size: 12px;
	}
`

const Cost = styled.span`
	position: absolute;
	bottom: 35px;
	z-index: 9;
	font-weight: bold;
	font-size: 14px;

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		bottom: 40px;
	}

	@media screen and (max-width: 767px) {
		bottom: 40px;
		font-size: 12px;
	}
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

	@media screen and (max-width: 767px) {
		height: 50px;
		width: 90px;
		bottom: 20px;
	}

	@media screen and (min-width: 768px) and (max-width: 1199px) {
		bottom: 15px;
		height: 65px;
	}
`

const Info = styled.span`
	position: absolute;
	bottom: 5px;
	font-size: 12px;
	text-align: center;
	z-index: 10;

	@media screen and (max-width: 767px) {
		font-size: 10px;
	}
`

export default PricesAndServices
