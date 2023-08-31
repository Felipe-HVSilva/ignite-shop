import * as Dialog from "@radix-ui/react-dialog"
import { ShoppingBag, X } from "lucide-react"

import { CardsContainer, StyledClose, StyledContent } from "./styles"

export default function Cart() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <ShoppingBag size={24} color="#8D8D99" />
          <span>1</span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <StyledContent>
          <h2>Sacola de compras</h2>

          <CardsContainer>
            <div className="card">
              <div className="image-product"></div>

              <div className="info-product">
                <span>Camisa Beyond the Limits</span>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </div>
            <div className="card">
              <div className="image-product"></div>

              <div className="info-product">
                <span>Camisa Beyond the Limits</span>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
              </div>
            </div>
          </CardsContainer>

          <footer>
            <div className="quantity">
              <span>Quantidade</span>
              <strong>3 Itens</strong>
            </div>

            <div className="price">
              <span>Valor Total</span>
              <strong>R$ 270,00</strong>
            </div>

            <button>Finalizar compra</button>
          </footer>
          <StyledClose>
            <X color="#8D8D99" size={24} />
          </StyledClose>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
