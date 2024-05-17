import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
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
                            <ScrollLink to="home" smooth={false} className="nav__link active-link">Home</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="about" smooth={false} className="nav__link">About</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="skills" smooth={false} className="nav__link">Skills</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="work" smooth={false} className="nav__link">Work</ScrollLink>
                        </li>
                        <li className="nav__item">
                            <ScrollLink to="contact" smooth={false} className="nav__link">Contact</ScrollLink>
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

export default Header