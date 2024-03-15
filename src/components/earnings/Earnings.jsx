import './Earnings.scss';
import Img from '../../assets/earnings.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Earnings = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    });

  return (
    <section className="earnings">
        <div className="earnings_container wrapper">
            <div className="earnings_left" data-aos='fade-right'>
                <img src={Img} alt="earnings" />
            </div>


            <div className="earnings_right" data-aos='zoom-in'>
                <h2>Rastreie seus ganhos e cryptocode fica fácil.</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio maiores saepe sequi id debitis. Perspiciatis.</p>
                <a href="#" className="btn">Comece!</a>
            </div>
        </div>
    </section>
  )
}

export default Earnings
