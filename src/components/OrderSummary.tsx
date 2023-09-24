import { useState } from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { BiMinusCircle } from 'react-icons/bi'
import { BsXCircle } from 'react-icons/bs'

import { CartActions, useCart } from '../contexts/CartProvider'
import { ProductsInfo } from '../contexts/CartProvider'
import * as S from '../styles/OrderSummary.styles'
import { Modal } from './Modal'

function OrderSummary() {
  const { state, dispatch } = useCart()
  const [open, setOpen] = useState<boolean>(false)

  const removeProduct = (idProduto: number) => {
    dispatch({
      type: CartActions.removeProductbyId,
      payload: {
        id: idProduto,
      },
    })
  }

  const handleQty = (novaQuantidade: number, produto: ProductsInfo) => {
    if (novaQuantidade === 0) {
      return removeProduct(produto.id)
    }
    console.log(novaQuantidade)
    dispatch({
      type: CartActions.addQuantities,
      payload: {
        newQty: novaQuantidade,
        id: produto.id,
      },
    })
  }

  return (
    <>
      {state.productsList.length > 0 ? (
        <S.Container>
          <table>
            <thead>
              <S.Headers>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
              </S.Headers>
            </thead>

            <tbody>
              {state.productsList.map((item, index) => (
                <S.OrderInfo key={index}>
                  <td data-cell="Produto">
                    <S.ProdutoContainer>
                      <span>
                        <BsXCircle onClick={() => setOpen(!open)} />
                      </span>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                    </S.ProdutoContainer>
                    <Modal
                      isOpen={open}
                      setOpen={setOpen}
                      id={item.id}
                      removeProduct={removeProduct}
                    />
                  </td>
                  <S.Price data-cell="Preço">${item.price}</S.Price>
                  <S.Qtd data-cell="Quantidade">
                    <S.QtdContainer>
                      <button onClick={() => handleQty(item.qty + 1, item)}>
                        <BiPlusCircle />
                      </button>
                      <p>{item.qty}</p>
                      <button onClick={() => handleQty(item.qty - 1, item)}>
                        <BiMinusCircle />
                      </button>
                    </S.QtdContainer>
                  </S.Qtd>
                  <S.PriceSubtotal data-cell="Subtotal">
                    ${(Math.floor(item.price * item.qty * 100) / 100).toFixed(2)}
                  </S.PriceSubtotal>
                </S.OrderInfo>
              ))}
            </tbody>
          </table>
          <S.TotalPrice>
            <h1>Valor Total:</h1>
            <h1>${(Math.floor(state.totalPrice * 100) / 100).toFixed(2)}</h1>
          </S.TotalPrice>
        </S.Container>
      ) : (
        <S.NoOrders>Sem Produtos no Carrinho</S.NoOrders>
      )}
    </>
  )
}

export default OrderSummary
