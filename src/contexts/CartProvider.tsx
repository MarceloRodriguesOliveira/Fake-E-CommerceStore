import { createContext, ReactNode, useContext, useReducer } from 'react'

import { Products } from '../types/Products'

export enum CartActions {
  addNewProduct,
  removeProductbyId,
  addQuantities,
}

export interface ProductsInfo {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  qty: number
}

type PatchOperations = {
  newQty: number
  id: number
}

type RemoveOperations = {
  id: number
}

type State = {
  totalPrice: number
  productsList: ProductsInfo[]
}

type CartProviderProps = {
  children: ReactNode
}

type Action =
  | {
      type: CartActions.addNewProduct
      payload: ProductsInfo | Products
    }
  | {
      type: CartActions.addQuantities
      payload: PatchOperations
    }
  | {
      type: CartActions.removeProductbyId
      payload: RemoveOperations
    }
// para declaração do context
type ContextType = {
  state: State
  dispatch: (action: Action) => void
}

const initialData: State = {
  totalPrice: 0,
  productsList: [],
}

export const CartContext = createContext<ContextType | undefined>(undefined)

const cartUpdate = (state: State, action: Action) => {
  switch (action.type) {
    case CartActions.addNewProduct: {
      const { id, title, price, description, category, image } = action.payload

      const itemExists = state.productsList.find((item) => item.id === id)

      if (itemExists) {
        const index = state.productsList.findIndex((item) => {
          return item.id === id
        })
        if (state.productsList[index].qty === 5) {
          return state
        }
        if (index !== -1) {
          state.productsList[index].qty = state.productsList[index].qty + 1
          state.totalPrice = state.productsList.reduce((prev, products) => {
            return prev + products.qty * products.price
          }, 0)
          console.log(state.totalPrice)
          return {
            ...state,
            productList: [...state.productsList],
          }
        }
      }

      return {
        totalPrice: state.totalPrice + price,
        productsList: [
          ...state.productsList,
          { id, title, price, description, category, image, qty: 1 },
        ],
      }
    }
    case CartActions.removeProductbyId: {
      const { id } = action.payload

      const filteredCart = state.productsList.filter((produto) => produto.id !== id)

      state.productsList = [...filteredCart]

      state.totalPrice = state.productsList.reduce((prev, products) => {
        return prev + products.qty * products.price
      }, 0)

      return { ...state, productsList: [...state.productsList] }
    }
    case CartActions.addQuantities: {
      const { newQty, id } = action.payload

      const index = state.productsList.findIndex((item) => {
        return item.id === id
      })

      if (newQty === state.productsList[index].qty || newQty > 5) {
        return state
      }

      state.productsList[index].qty = newQty

      state.totalPrice = state.productsList.reduce((prev, products) => {
        return prev + products.qty * products.price
      }, 0)

      // const Subtotal = newQty * state.productsList[index].price

      return { ...state, productList: [...state.productsList] }
    }
    default:
      return state
  }
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartUpdate, initialData)
  const value = { state, dispatch }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

//Hook do cart
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart deve ser utilizado dentro do CartProvider!')
  }
  return context
}
