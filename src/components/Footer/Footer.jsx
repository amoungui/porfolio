import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Amoungui.</h2>
      <div className="footer__social">
        <Link
          to="https://web.facebook.com/profile.php?id=100081180588993"
          className="footer__icon"
          aria-label="Facebook"
        >
          <i className="bx bxl-facebook"></i>
        </Link>
        <Link
          to="https://www.instagram.com/jazzmastaz/"
          className="footer__icon"
          aria-label="Instagram"
        >
          <i className="bx bxl-instagram"></i>
        </Link>
        <Link
          to="https://x.com/Amoungui"
          className="footer__icon"
          aria-label="Twitter"
        >
          <i className="bx bxl-twitter"></i>
        </Link>
      </div>
      <p className="footer__copy">© Amoungui. All rigths reserved</p>
    </footer>
  );
}

export default Footer;
