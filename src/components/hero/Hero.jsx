
import './Hero.scss';
import Mob from '../../assets/Mob.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    })
  return (
   <section className="hero">
        <div className="hero_container wrapper">
            <div className="hero_left" data-aos="fade-right">
                <img src={Mob} alt='hero' />
            </div>



            <div className="hero_right" data-aos="zoom-in-up">
                <h1>Faça suas crypto transações de maneira simples.</h1>
                <p>
                    Nossa Criptomoeda oferece uma rápida, segura e baixo custo como alternativa a todos as necessidades financeiras. 
                    Junte-se a revolução das criptomoedas hoje e tome controle do seu futuro financeiro. Assine agora e comece a usar a plataforma você mesmo.
                </p>
                <a href="#" className="btn">Teste Grátis</a>
            </div>
        </div>
   </section>
  )
}

export default Hero
