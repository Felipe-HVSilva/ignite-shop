import Image from "next/image"
import { useCart } from "../../../hooks/useCart"
import { CardsContainer } from "./styles"
import { formatedPrice } from "../../../utils/formatedPrice"

export function CartFull() {
  const { cart, removeItem } = useCart()

  return (
    <CardsContainer>
      {cart.map((item) => (
        <div className="card">
          <div className="image-product">
            <Image
              src={item.imageUrl}
              width={94.74}
              height={94.74}
              alt={item.name}
            />
          </div>
          <div className="info-product">
            <span>{item.name}</span>
            <strong>{formatedPrice(item.price)}</strong>
            <button onClick={() => removeItem(item.id)}>Remover</button>
          </div>
        </div>
      ))}
    </CardsContainer>
  )
}
