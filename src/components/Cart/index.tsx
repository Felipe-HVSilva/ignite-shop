import * as Dialog from "@radix-ui/react-dialog"
import { ShoppingBag, X } from "lucide-react"
import { useState } from "react"
import axios from "axios"

import { StyledClose, StyledContent } from "./styles"
import { useCart } from "../../hooks/useCart"
import { formatedPrice } from "../../utils/formatedPrice"
import { CartEmpty } from "./CartEmpty"
import { CartFull } from "./CartFull"

export default function Cart() {
  const { cart, removeItem, totalPrice } = useCart()

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post("/api/checkout", {
        products: cart,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert("Falha ao redirecionar o checkout !")
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <ShoppingBag size={24} color="#8D8D99" />
          {cart.length >= 1 && <span>{cart.length}</span>}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay />
        <StyledContent>
          <h2>Sacola de compras</h2>

          {cart.length >= 1 ? <CartFull /> : <CartEmpty />}

          <footer>
            <div className="quantity">
              <span>Quantidade</span>
              <strong>
                {cart.length === 1
                  ? `${cart.length} item`
                  : `${cart.length} itens`}
              </strong>
            </div>

            <div className="price">
              <span>Valor Total</span>
              <strong>{formatedPrice(totalPrice)}</strong>
            </div>

            <button
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession}
            >
              Finalizar compra
            </button>
          </footer>

          <StyledClose>
            <X color="#8D8D99" size={24} />
          </StyledClose>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
