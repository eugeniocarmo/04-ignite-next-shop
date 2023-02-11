import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "../styles/pages/home";

import tshirt1 from '../assets/tshirts/1.png';
import tshirt2 from '../assets/tshirts/2.png';
import tshirt3 from '../assets/tshirts/3.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
 })
  return (
    
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tshirt1} width={520} height={480} alt=""/>

        <footer>
          <strong>Tshirt 1</strong>
          <span>£15</span>  
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={tshirt2} width={520} height={480} alt=""/>
        
        <footer>
          <strong>Tshirt 2</strong>
          <span>£18</span>
        </footer>
      </Product>
      
      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt=""/>
        
        <footer>
          <strong>Tshirt 3</strong>
          <span>£17</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={tshirt3} width={520} height={480} alt=""/>
        
        <footer>
          <strong>Tshirt 3</strong>
          <span>£13</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}

