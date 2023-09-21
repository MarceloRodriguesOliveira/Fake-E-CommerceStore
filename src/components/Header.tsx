import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { useCart } from '../contexts/CartProvider'
import * as S from '../styles/Header.styles'

function Header() {
  const { state } = useCart()
  const Badge = () => {
    if (state.productsList.length === 0) {
      return <BsCart />
    } else {
      return (
        <>
          <BsCart />
          <span>{state.productsList.length}</span>
        </>
      )
    }
  }
  return (
    <S.Menu>
      <S.Logo>
        <Link to="/">
          <h1>Fakestore</h1>
        </Link>
      </S.Logo>
      <div>
        <Link to="/checkout">
          <S.Carrinho>{Badge()}</S.Carrinho>
        </Link>
      </div>
    </S.Menu>
  )
}

export default Header
