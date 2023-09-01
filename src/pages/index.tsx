import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import { useKeenSlider } from "keen-slider/react"

import { stripe } from "../lib/stripe"

import { HomeContainer, Product } from "../styles/pages/home"

import "keen-slider/keen-slider.min.css"
import { ShoppingBag } from "lucide-react"
import { useCart } from "../hooks/useCart"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
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
    <>
      <Head>
        <title>home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Product className="keen-slider__slide">
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt="camiseta"
                />

                <footer>
                  <div className="info-product">
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <button>
                    <ShoppingBag color="white" size={32} />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
  }
}
