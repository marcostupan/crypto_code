import './Subscribe.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Subscribe = () => {

    useEffect(() => {
        Aos.init({duration:1000})
    })
  return (
    <section className="subscribe">
        <div className="subscribe_container wrapper">
            <h2 data-aos="fade-up" >Se inscreva e tenha atualizações</h2>
            <p data-aos='fade-up'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, architecto iste dolorem facere laborum cupiditate sequi id praesentium placeat iusto.</p>
            <form action="#" data-aos='face-up'>
                <input type="email" placeholder='Escreva seu E-mail aqui'/>
                <a href="#" className="btn">
                    Inscreva-se
                </a>
            </form>
        </div>
    </section>
  )
}

export default Subscribe
