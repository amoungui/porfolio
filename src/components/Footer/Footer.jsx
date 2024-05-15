import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer className="footer">
        <p className="footer__title">Amoungui.</p>
        <div className="footer__social">
            <Link to="/" className="footer__icon"><i class="bx bxl-facebook"></i></Link>
            <Link to="/" className="footer__icon"><i class="bx bxl-instagram"></i></Link>
            <Link to="/" className="footer__icon"><i class="bx bxl-twitter"></i></Link>
        </div>
        <p className="footer__copy">&#169; Amoungui. All rigths reserved</p>
      </footer>
    )
}

export default Footer