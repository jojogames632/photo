import React, { useState } from 'react';
import styled from 'styled-components';
import couple1 from '../images/couple/couple.jpg';
import couple2 from '../images/couple/couple2.jpg';
import couple3 from '../images/couple/couple3.jpg';
import couple4 from '../images/couple/couple4.jpg';
import couple5 from '../images/couple/couple5.jpg';
import pregnancy1 from '../images/pregnancy/grossesse.jpg';
import pregnancy2 from '../images/pregnancy/grossesse2.jpg';
import pregnancy3 from '../images/pregnancy/grossesse3.jpg';
import pregnancy4 from '../images/pregnancy/grossesse4.jpg';
import pregnancy5 from '../images/pregnancy/grossesse5.jpg';
import marriage1 from '../images/marriage/mariage.jpg';
import marriage2 from '../images/marriage/mariage2.jpg';
import marriage3 from '../images/marriage/mariage3.jpg';
import marriage4 from '../images/marriage/mariage4.jpg';
import marriage5 from '../images/marriage/mariage5.jpg';
import family1 from '../images/family/family.jpg';
import family2 from '../images/family/family2.jpg';
import family3 from '../images/family/family3.jpg';
import family4 from '../images/family/family4.jpg';
import family5 from '../images/family/family5.jpg';
import portrait1 from '../images/portrait/portrait.jpg';
import portrait2 from '../images/portrait/portrait2.jpg';
import portrait3 from '../images/portrait/portrait3.jpg';
import portrait4 from '../images/portrait/portrait4.jpg';
import portrait5 from '../images/portrait/portrait5.jpg';
import baptism1 from '../images/baptism/baptism.jpg';
import baptism2 from '../images/baptism/baptism2.jpg';
import baptism3 from '../images/baptism/baptism3.jpg';
import baptism4 from '../images/baptism/baptism4.jpg';
import baptism5 from '../images/baptism/baptism5.jpg';
import baby1 from '../images/baby/baby.jpg';
import baby2 from '../images/baby/baby2.jpg';
import baby3 from '../images/baby/baby3.jpg';
import baby4 from '../images/baby/baby4.jpg';
import baby5 from '../images/baby/baby5.jpg';

const Galery = () => {
	const [activeTab, setActiveTab] = useState('Toutes')
	const data = [
	{
		id: 1,
		picture: couple1,
		category: 'Couple'
	},
	{
		id: 2,
		picture: couple2,
		category: 'Couple'
	},
	{
		id: 3,
		picture: couple3,
		category: 'Couple'
	},
	{
		id: 4,
		picture: couple4,
		category: 'Couple'
	},
	{
		id: 5,
		picture: couple5,
		category: 'Couple'
	},
	{
		id: 6,
		picture: pregnancy1,
		category: 'Grossesse'
	},
	{
		id: 7,
		picture: pregnancy2,
		category: 'Grossesse'
	},
	{
		id: 8,
		picture: pregnancy3,
		category: 'Grossesse'
	},
	{
		id: 9,
		picture: pregnancy4,
		category: 'Grossesse'
	},
	{
		id: 10,
		picture: pregnancy5,
		category: 'Grossesse'
	},
	{
		id: 11,
		picture: marriage1,
		category: 'Mariage'
	},
	{
		id: 12,
		picture: marriage2,
		category: 'Mariage'
	},
	{
		id: 13,
		picture: marriage3,
		category: 'Mariage'
	},
	{
		id: 14,
		picture: marriage4,
		category: 'Mariage'
	},
	{
		id: 15,
		picture: marriage5,
		category: 'Mariage'
	},
	{
		id: 16,
		picture: baby1,
		category: 'Bébé'
	},
	{
		id: 17,
		picture: baby2,
		category: 'Bébé'
	},
	{
		id: 18,
		picture: baby3,
		category: 'Bébé'
	},
	{
		id: 19,
		picture: baby4,
		category: 'Bébé'
	},
	{
		id: 20,
		picture: baby5,
		category: 'Bébé'
	},
	{
		id: 21,
		picture: baptism1,
		category: 'Baptème'
	},
	{
		id: 22,
		picture: baptism2,
		category: 'Baptème'
	},
	{
		id: 23,
		picture: baptism3,
		category: 'Baptème'
	},
	{
		id: 24,
		picture: baptism4,
		category: 'Baptème'
	},
	{
		id: 25,
		picture: baptism5,
		category: 'Baptème'
	},
	{
		id: 26,
		picture: family1,
		category: 'Famille'
	},
	{
		id: 27,
		picture: family2,
		category: 'Famille'
	},
	{
		id: 28,
		picture: family3,
		category: 'Famille'
	},
	{
		id: 29,
		picture: family4,
		category: 'Famille'
	},
	{
		id: 30,
		picture: family5,
		category: 'Famille'
	},
	{
		id: 31,
		picture: portrait1,
		category: 'Portrait'
	},
	{
		id: 32,
		picture: portrait2,
		category: 'Portrait'
	},
	{
		id: 33,
		picture: portrait3,
		category: 'Portrait'
	},
	{
		id: 34,
		picture: portrait4,
		category: 'Portrait'
	},
	{
		id: 35,
		picture: portrait5,
		category: 'Portrait'
	},
	];
	const categories = ['Toutes', 'Couple', 'Grossesse', 'Mariage', 'Bébé', 'Baptème', 'Famille', 'Portrait'];
	
	return (
		<Main>
			<h1>Gallerie</h1>
			<GalleryContainer>
				<Tab>
					{categories.map((category, index) => (
						<TabName 
							key={index}
							onClick={() => setActiveTab(category)}	
						>
							{category}
						</TabName>
					))}
				</Tab>
				<Gallery>
					{data.map((photo, index) => {
						return activeTab === 'Toutes' 
							?	<PicContainer key={index}>
									<Category>{photo.category}</Category>
									<Image src={photo.picture} alt={photo.category} />
								</PicContainer>
							: ( activeTab === photo.category
								? <PicContainer key={index}>
										<Category>{photo.category}</Category>
										<Image src={photo.picture} alt={photo.category} />
									</PicContainer>
								: null
							)
					})}
				</Gallery>
			</GalleryContainer>
		</Main>
	)
}

const PicContainer = styled.div`
	height: 140px;
	width: 240px;
	margin: 5px;
	position: relative;
`

const Image = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 4px;
	object-fit: cover;
`

const Category = styled.span`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: black;
	font-size: 10px;
	padding: 3px;
	border-radius: 5px;
	color: white;
`

const Tab = styled.div`
	display: flex;
	margin-bottom: 30px;
`

const TabName = styled.span`
	margin-right: 3vw;
	margin-left: 15px;
	cursor: pointer;

	@media screen and (max-width: 1000px) and (min-width: 768px) {
		margin-right: 2vw;
		font-size: 14px;
	}

	@media screen and (max-width: 768px) {
		margin-right: 1vw;
		font-size: 10px;	
	}	
`

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 250px);
	height: 750px;
	overflow: scroll;

	@media screen and (max-width: 1300px) and (min-width: 1000px) {
		grid-template-columns: repeat(4, 250px);
	}

	@media screen and (max-width: 1000px) and (min-width: 768px) {
		grid-template-columns: repeat(3, 250px);
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 250px);	
	}	
`

const GalleryContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 8vh;
`

const Main = styled.div`
	height: calc(100vh - 80px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default Galery
