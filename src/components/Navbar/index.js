import React from 'react';
import { 
	Nav,
	NavLink,
	Bars,
	NavMenu
} from './NavbarElements';
import Logo from '../../images/logo.png';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to='/'>
					<img src={Logo} alt='logo' style={{ height: 70 }}/>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to='/' activeStyle>
						Accueil
					</NavLink>
					<NavLink to='/galery' activeStyle>
						Galerie
					</NavLink>
					<NavLink to='/prices-and-services' activeStyle>
						Tarifs & préstations
					</NavLink>
					<NavLink to='/contact' activeStyle>
						Contact
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	)
}

export default Navbar
