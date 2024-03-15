import "./Status.scss";
import StatusImg from "../../assets/status.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Status = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="status">
      <div className="status_container wrapper">
        <div className="status_left" data-aos='zoom-in-up'>
          <h2>Confie-nos devido ao nosso depósito conveniente.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            iste?
          </p>
          <a href="#" className="btn">
            SAIBA MAIS
          </a>
        </div>

        <div className="status_right" data-aos='fade-left'>
            <img src={StatusImg} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default Status;
