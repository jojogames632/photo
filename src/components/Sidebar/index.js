import React from 'react';
import { Background, CloseBtn, Menu, MobileLink } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<div>
			<Background isOpen={isOpen} onClick={toggle} >
				<CloseBtn onClick={toggle} />
				<Menu>
					<MobileLink to='/' activeStyle onClick={toggle}>
						Accueil
					</MobileLink>
					<MobileLink to='/galery' activeStyle onClick={toggle}>
						Galerie
					</MobileLink>
					<MobileLink to='/prices-and-services' activeStyle onClick={toggle}>
						Tarifs & préstations
					</MobileLink>
					<MobileLink to='/contact' activeStyle onClick={toggle}>
						Contact
					</MobileLink>
				</Menu>
			</Background>
		</div>
	)
}

export default Sidebar
