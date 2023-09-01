import { AppProps } from "next/app"

import { CartProvider } from "../contexts/CartContext"

import { globalStyles } from "../styles/global"

import { Container } from "../styles/pages/app"
import { Header } from "../components/Header"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
