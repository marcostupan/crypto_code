import "./Pricing.scss";
import { pricingInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {

    useEffect(() => {
        Aos.init({duration:1000});
    });
  return (
    <section className="pricing">
      <h2 data-aos='fade-up' >Melhor criptografia atualmente</h2>
      <div className="pricing_container wrapper">
        {
            pricingInfo.map(({image, name, price}) => (
                // eslint-disable-next-line react/jsx-key
                <div className="pricing_card" data-aos='fade-up'>
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <span>{price}</span>
                    <a href="#" className="btn">Compre</a>
                </div>
            ))
        }
      </div>
    </section>
  );
};

export default Pricing;
