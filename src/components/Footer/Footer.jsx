import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Amoungui.</p>
            <div className="footer__social">
                <Link to="/" className="footer__icon" aria-label="Facebook"><i class="bx bxl-facebook"></i></Link>
                <Link to="/" className="footer__icon" aria-label="Instagram"><i class="bx bxl-instagram"></i></Link>
                <Link to="/" className="footer__icon" aria-label="Twitter"><i class="bx bxl-twitter"></i></Link>
            </div>
            <p className="footer__copy">© Amoungui. All rigths reserved</p>
        </footer>
    )
}

export default Footer
