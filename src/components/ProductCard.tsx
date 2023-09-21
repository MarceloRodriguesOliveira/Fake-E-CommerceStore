import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs'
import Skeleton from 'react-loading-skeleton'

import { ProductsInfo, useCart } from '../contexts/CartProvider'
import * as S from '../styles/Feed.styles'
import { Products } from '../types/Products'

type ProdutoFuncao = {
  produto: Products
  handleItem: (produto: Products) => void
}

function ProductCard({ produto, handleItem }: ProdutoFuncao) {
  const { state } = useCart()

  const handleMaxValue = (produto: Products) => {
    const itemExists = state.productsList.find((item) => item.id === produto.id)

    if (itemExists) {
      const index = state.productsList.findIndex((item) => {
        return item.id === produto.id
      })
      if (state.productsList[index].qty === 5) {
        console.log(true)
        return true
      }
    }
    console.log(false)
    return false
  }

  return (
    <>
      <S.ProductThumb>
        <img src={produto.image} alt={produto.title} />
      </S.ProductThumb>
      <S.ProductDetails>
        <S.ProductName>
          <h2>{produto.title || <Skeleton />}</h2>
        </S.ProductName>
        <S.ProductPrice>
          <span>$ {produto.price}</span>
          <S.ButtonToCart
            onClick={() => handleItem(produto)}
            dependable={handleMaxValue(produto) ? true : false}
          >
            {handleMaxValue(produto) ? <BsFillCartCheckFill /> : <BsFillCartPlusFill />}
          </S.ButtonToCart>
        </S.ProductPrice>
      </S.ProductDetails>
    </>
  )
}

export default ProductCard
