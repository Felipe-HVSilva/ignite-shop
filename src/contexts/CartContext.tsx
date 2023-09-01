import { ReactNode, createContext, useState } from "react"

interface CartContextProps {
  cart: CartProps[]
  totalPrice: number
  addItem: (product: CartProps) => void
  removeItem: (productId: string) => void
}

interface CartProps {
  id: string
  name: string
  price: number
  defaultPriceId: string
  imageUrl: string
}

export const CartContext = createContext({} as CartContextProps)

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])

  const totalPrice = cart.reduce((acc, item) => {
    acc += item.price
    return acc
  }, 0)

  function addItem(product: CartProps) {
    const isItemExistInCart = cart.some((item) => item.name === product.name)

    if (isItemExistInCart) {
      return
    }

    setCart((prevState) => [...prevState, product])
  }

  function removeItem(productId: string) {
    const newProductList = cart.filter((item) => item.id !== productId)

    setCart(newProductList)
  }

  return (
    <CartContext.Provider value={{ cart, totalPrice, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
