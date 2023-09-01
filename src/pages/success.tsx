import Link from "next/link"
import {
  SuccessContainer,
  ImageContainer,
  ImagesContainer,
} from "../styles/pages/success"
import { GetServerSideProps } from "next"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import Image from "next/image"
import Head from "next/head"

interface SuccessProps {
  customerName: string
  productImage: string[]
}

export default function Success({ customerName, productImage }: SuccessProps) {
  console.log(productImage)

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesContainer>
          {productImage.map((imageUrl) => {
            return (
              <ImageContainer>
                <Image src={imageUrl} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </ImagesContainer>

        <p>
          Uhuuu <strong>{customerName}</strong> sua compra de{" "}
          {productImage.length === 1
            ? "uma camisa"
            : `${productImage.length} camisas`}{" "}
          já está a caminho da sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.sessionId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return product.images[0]
  })
  return {
    props: {
      customerName,
      productImage: product,
    },
  }
}
