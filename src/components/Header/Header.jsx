import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const setLinkActive = (to) => {
      setActiveLink(to);
    };

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <ScrollLink to="/" smooth={true} className="nav__logo">Amoungui.</ScrollLink>
                </div>
    
                <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <ScrollLink to="home" spy={true} smooth={false} className={`nav__link ${activeLink === 'home' ? 'active-link' : ''}`} onSetActive={setLinkActive}>Home</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="about" spy={true} smooth={false} className={`nav__link ${activeLink === 'about' ? 'active-link' : ''}`} onSetActive={setLinkActive}>About</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="skills" spy={true} smooth={false} className={`nav__link ${activeLink === 'skills' ? 'active-link' : ''}`} onSetActive={setLinkActive}>Skills</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="work" spy={true} smooth={false} className={`nav__link ${activeLink === 'work' ? 'active-link' : ''}`} onSetActive={setLinkActive}>Work</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="contact" spy={true} smooth={false} className={`nav__link ${activeLink === 'contact' ? 'active-link' : ''}`} onSetActive={setLinkActive}>Contact</ScrollLink>
                        </li>
                    </ul>
                </div>
    
                <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                    <i className="bx bx-menu"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
