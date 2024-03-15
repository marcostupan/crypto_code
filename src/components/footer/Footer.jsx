import "./Footer.scss";
import Logo from "../../assets/Logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <footer className="footer">
      <div className="footer_container wrapper" data-aos="fade-up">
        <div className="foot_col">
          <img src={Logo} alt="logo" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            culpa.
          </p>
        </div>
        <div className="footer_col">
          <h2>Sobre</h2>
          <a href="#">Sobre nós</a>
          <a href="#">Caracteristicas</a>
          <a href="#">Notícias</a>
        </div>

        <div className="footer_col">
          <h2>Companhia</h2>
          <a href="#">CryptoCode</a>
          <a href="#">Segurança</a>
          <a href="#">Rankings</a>
        </div>

        <div className="footer_col">
          <h2>Suporte</h2>
          <a href="#">Perguntas</a>
          <a href="#">Suporte</a>
          <a href="#">Contato</a>
        </div>

        <div className="footer_col iconsc">
          <h3>Medias Sociais</h3>
          <div className="footer_icons"></div>
          <a href="#" className="footer_icon"><FaFacebookF/></a>
          <a href="#" className="footer_icon"><FaInstagram/></a>
          <a href="#" className="footer_icon"><FaTwitter/></a>
          <a href="#" className="footer_icon"><FaLinkedinIn/></a>
          <a href="#" className="footer_icon"><FaYoutube/></a>
        </div>

        <span>Desenvolvido por Marcos Ribeiro, 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
