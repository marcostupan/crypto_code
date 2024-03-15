import './Navbar.scss';
import Logo from '../../assets/Logo.png';

import {IoMenu} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

  return (
     <header className="navbar">
        <nav className="navbar_container wrapper">
            <a href="#" className="navbar_logo" onClick={() => setShowNav(false)}>
                <img src={Logo} alt="Logo" />
            </a>

            <ul className={`${showNav ? "show" : ""}`} >
                <li onClick={() => setShowNav(false)}><a href="#">Produto</a></li>
                <li onClick={() => setShowNav(false)} ><a href="#">Companhia</a></li>
                <li onClick={() => setShowNav(false)}><a href="#">Pricing</a></li>
                <li onClick={() => setShowNav(false)}><a href="#">blog</a></li>
                
            </ul>

            <div className="navbar_btns">
                <a href="#" id="">login</a>
                <a href="#" className="btn">registre</a>
            </div>

            <div className="nav_menu" onClick={() => setShowNav(!showNav)}>
                {showNav ? <IoMdClose />: <IoMenu/>}
            </div>
        </nav>
     </header>
  )
}

export default Navbar
