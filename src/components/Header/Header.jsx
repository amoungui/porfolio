import { useState } from 'react';
import { Link } from 'react-router-dom'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="/" className="nav__logo">Amoungui.</Link>
                </div>
    
                <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="#home" className="nav__link active-link">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#about" className="nav__link">About</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#skills" className="nav__link">Skills</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#work" className="nav__link">Work</Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#contact" className="nav__link">Contact</Link>
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