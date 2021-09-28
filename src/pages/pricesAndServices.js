import React from 'react'
import styled from 'styled-components'

const PricesAndServices = () => {
	const services = [
		{
			id: 1,
			title: 'Juste moi',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: 130,
		},
		{
			id: 2,
			title: 'Pour deux',
			description: 'Pour deux personnes, en extérieur ou en studio',
			price: 195,
		},
		{
			id: 3,
			title: 'Famille',
			description: 'Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio',
			price: 220,
		},
		{
			id: 4,
			title: 'Il était une fois',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: 160,
		},
		{
			id: 5,
			title: 'Mon bébé',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: 100,
		},
		{
			id: 6,
			title: 'J\'immortalise l\'événement',
			description: 'Séance pour une personne, en extérieur ou en studio',
			price: 0,
		},
	]

	return (
		<Main>
			<h1>Tarifs & préstations</h1>
			<ServicesContainer>
				{services.map((service, index) => {

					return (
						<Services key={index}>
							<Title>{service.title}</Title>
							<Description>{service.description}</Description>
							<Cost>{service.price} €</Cost>
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
`

const ServicesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 30vw);
	margin-top: 10vh;
`

const Services = styled.div`
	border: 1px solid black;
	border-radius: 5px;
	box-shadow: 3px 3px 6px 2px rgba(0,0,0,0.6);
	width: 25vw;
	height: 20vh;
	margin-bottom: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const Title = styled.h2`

`

const Description = styled.p`
	text-align: center;
	margin-top: 3vh;
	margin-bottom: 3vh;
`

const Cost = styled.span`
	
`

export default PricesAndServices
