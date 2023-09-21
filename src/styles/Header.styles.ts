import styled from 'styled-components'

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;
  background-color: #131921;

  min-height: 60px;
`

export const Logo = styled.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }

  a > h1 {
    color: #ffffff;
  }

  h1:hover {
    color: #ff5510;
    transition: 0.2s ease-in-out;
  }
`
export const Carrinho = styled.div`
  color: #ffff;
  position: relative;
  display: block;
  width: 28px;
  height: 28px;
  height: auto;
  font-size: 1.3rem;

  span {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 10px;
    font-weight: bold;
    border-radius: 50%;
    background: #ff5510;
    width: 16px;
    height: 16px;
    display: block;
    text-align: center;
    color: white;
  }
`
