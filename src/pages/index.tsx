import { GetServerSideProps } from "next";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react'


import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home";

import tshirt1 from '../assets/tshirts/1.png';
import tshirt2 from '../assets/tshirts/2.png';
import tshirt3 from '../assets/tshirts/3.png';

import 'keen-slider/keen-slider.min.css';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}


export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
 })


  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => {
        return (
          <Product className="keen-slider__slide">
            <Image src={tshirt1} width={520} height={480} alt=""/>

            <footer>
              <strong>Tshirt 1</strong>
              <span>£15</span>  
        </footer>
      </Product>
          )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
    })

  const products =  response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unity_amount/100,
    }
  
  
  })
  
  

  return {
    props: {
      products,
    }
  }
}

