import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import tshirt1 from '../assets/tshirts/1.png';
import tshirt2 from '../assets/tshirts/2.png';
import tshirt3 from '../assets/tshirts/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt=""/>

        <footer>
          <strong>Tshirt X</strong>
          <span>£15</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
