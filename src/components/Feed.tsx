import { useEffect, useState } from 'react'

import { CartActions, ProductsInfo, useCart } from '../contexts/CartProvider'
import * as S from '../styles/Feed.styles'
import { Products } from '../types/Products'
import CardSkeleton from './CardSkeleton'
import ProductCard from './ProductCard'

type Lista = {
  listadeProdutos: Products[]
}

function Feed() {
  const { state, dispatch } = useCart()
  const [loading, setLoading] = useState(true)
  const [lista, setLista] = useState<Products[]>([])

  const getProducts = async () => {
    const req = await fetch('https://fakestoreapi.com/products')
    const listadeProdutos = await req.json()
    setLista(listadeProdutos)
    setLoading(false)
    // console.log(listadeProdutos)
  }

  const produtocatch = (produto: Products) => {
    dispatch({
      type: CartActions.addNewProduct,
      payload: produto,
    })
  }

  useEffect(() => {
    const getAllProducts = async () => {
      getProducts()
    }

    getAllProducts()
  }, [])

  return (
    <S.Container>
      {loading && <CardSkeleton cards={20} />}

      {lista.map((item, index) => (
        <S.Card key={index}>
          <ProductCard produto={item} handleItem={produtocatch} />
        </S.Card>
      ))}
    </S.Container>
  )
}

export default Feed
