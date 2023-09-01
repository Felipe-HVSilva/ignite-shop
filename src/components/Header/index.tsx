import logoImg from "../../assets/logo.svg"

import Image from "next/image"
import { HeaderContainer } from "./styles"
import Cart from "../Cart"
import Link from "next/link"

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="logo" />
      </Link>

      <Cart />
    </HeaderContainer>
  )
}
