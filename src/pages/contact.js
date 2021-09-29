import React, { useState } from 'react'
import styled from 'styled-components';
import ContactImg from '../images/email.png';
import Photography from '../images/Photography.jpg';

const Contact = () => {
	const [state, setState] = useState({
		firstname: "",
		lastname: "",
		email: ""
	})

	const handleChange = (event) => {
		const value = event.target.value;
		setState({
			...state,
			[event.target.name]: value
		})
	}

	return (
		<Main>
			<LeftAside>
					<Image src={ContactImg} alt="contact" />
					<Infos>
						Pour tout renseignement complémentaire, veuillez saisir votre nom, prénom et email.
						<br/>
						<br/>
						Je m'engage à vous répondre dans les 24h.
					</Infos>
					<Form>
						<Input 
							type="text" 
							name="firstname" 
							id="firstname" 
							placeholder="Prénom"
							value={state.firstname}
							onChange={handleChange}
						/>
						<Input 
							type="text" 
							name="lastname" 
							id="lastname" 
							placeholder="Nom"
							value={state.lastname}
							onChange={handleChange}
						/>
						<Input 
							type="text" 
							name="email" 
							id="email" 
							placeholder="Email"
							value={state.email}
							onChange={handleChange}
						/>
						<SubmitBtn type="submit">Envoyer</SubmitBtn>
					</Form>
			</LeftAside>
			<PhotoImage src={Photography} alt="photography" />
		</Main>
	)
}

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #E9EAED;
	height: calc(100vh - 80px);
`

const LeftAside = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-right: 150px;
`

const SubmitBtn = styled.button`
	width: 80px;
	margin-left: auto;
	margin-right: auto;
	background: linear-gradient(to right, #6066E2, #B64B9E, #ED3F62);
	padding: 10px;
	color: white;
	font-weight: bold;
	border-radius: 15px;
	border: none;
	cursor: pointer;
	margin-top: 20px;
`

const Infos = styled.p`
	width: 20vw;
	margin-bottom: 50px;
`

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 22vw;
	height: 40vh;
`

const Image = styled.img`
	height: 250px;
	width: 250px;
	margin-bottom: 50px;
`

const PhotoImage = styled.img`
	height: 500px;
	width: 850px;
`

const Input = styled.input`
	margin-bottom: 20px;
	height: 50px;
	border-radius: 5px;
	border: none;
	padding: 10px;
`

export default Contact
