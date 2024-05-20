import { Link } from 'react-router-dom'
import React, { useEffect, useRef } from 'react';
import Modal from '../../containers/Modal/Modal'
import Form from '../../containers/Form/Form'
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import EventList from "../../containers/Events/Event";
import Image from '../../components/Image/Image'
import Typed from 'typed.js';

import './style.scss';

// Importation de la fonction v4 (pour générer des UUID) depuis la bibliothèque 'uuid'
import { v4 } from 'uuid';

// Création d'un alias pour la fonction v4
const uuidv4 = v4;

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["coder", "Frontend Developer","Software Engineer", "Data Scientist"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500
    });

    // Nettoyage à la désinscription
    return () => {
      typed.destroy();
    };
  }, []);  
  return (
      <main>
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hi, I'am <br /><span ref={el}></span><br />
            </h1>
          </div>

          <div className="home__social">
            <Link to="/" className="home__social-icon"><i class="bx bxl-linkedin"></i></Link>
            <Link to="/" className="home__social-icon"><i class="bx bxl-instagram"></i></Link>
            <Link to="/" className="home__social-icon"><i class="bx bxl-github"></i></Link>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 479 467"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                />
                <image
                  class="home__blob-img"
                  x="50"
                  y="110"
                  href="assets/img/serge_white_bg.png"
                />
              </g>
            </svg>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <Image
                className="img-clip"
                imageSrc="assets/img/Capture d'écran 2024-05-15 071954.png"
                imageAlt="Image profil"
              />
            </div>

            <div>
              <h2 className="about__subtitle">I'am Amoungui</h2>
              <p className="about__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat
                ut voluptates soluta, aut earum nemo recusandae cumque
                perferendis! Recusandae alias accusamus atque.
              </p>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Profesional Skills</h2>
              <p className="skills__text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                optio id vero amet, alias architecto consectetur error eum eaque
                sit.
              </p>
              <SkillsCard 
                skillsName="HTML5"
                skillsPercentage="95%"
                classNameBxl="bx bxl-html5 skills__icon"
                classNameSkill="skills__bar skills__html"
                key={`SkillsCard-item-${uuidv4()}`}
              />
              <SkillsCard 
                skillsName="CSS3"
                skillsPercentage="85%"
                classNameBxl="bx bxl-css3 skills__icon"
                classNameSkill="skills__bar skills__css"
                key={`SkillsCard-item-${uuidv4()}`}
              />
              <SkillsCard 
                skillsName="JAVASCRIPT"
                skillsPercentage="65%"
                classNameBxl="bx bxl-javascript skills__icon"
                classNameSkill="skills__bar skills__js"
                key={`SkillsCard-item-${uuidv4()}`}
              />
              <SkillsCard 
                skillsName="REACT"
                skillsPercentage="65%"
                classNameBxl="bx bxs-paint skills__icon"
                classNameSkill="skills__bar skills__react"
                key={`SkillsCard-item-${uuidv4()}`}
              />
            </div>

          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="work__container bd-grid"><EventList /></div>
        </section>

        <section className="contact section FormContainer" id="contact">
          <h2 className="section-title">Contact</h2>

          <div className="bd-grid">
            <Modal
              Content={
                <div className="ModalMessage--success">
                  <div>Message envoyé !</div>
                  <p>
                    Merci pour votre message nous tâcherons de vous répondre dans
                    les plus brefs délais
                  </p>
                </div>
              }
            >
              {({ setIsOpened }) => (
                <Form
                  onSuccess={() => setIsOpened(true)}
                  onError={() => null}
                />
              )}
            </Modal>
          </div>
        </section>
      </main>
  );
}

export default Home;
