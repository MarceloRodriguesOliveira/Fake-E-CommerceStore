import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 14rem));
  justify-content: center;
  padding: 15px 0px;

  gap: 1.5rem;
`
export const Card = styled.div`
  border: 1px solid #eee;
  /* height: fit-content; */

  border-radius: 5px;
  width: 100%;
  height: 100%;

  padding: 10px;

  display: flex;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const ProductThumb = styled.div`
  /* border: 1px solid red; */

  img {
    width: 100%;
    height: 160px;
  }
`
export const ProductDetails = styled.div`
  /* border: 1px solid red; */
  /* padding-top: 5px; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  height: 100%;
`
export const ProductName = styled.div`
  /* display: inline-block; */
  padding-top: 5px;
  display: flex;
  height: 100%;
  place-items: center;
  text-align: justify;

  word-break: 'break-word';
  /* text-align: justify; */

  h2 {
    font-size: 0.875rem;
    /* border: 1px solid red; */
  }

  @media (max-width: 400px) {
    place-content: center;
    text-align: center;
  }
`

export const ProductPrice = styled.div`
  /* height: 100%; */
  padding-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 1.1rem;
    color: #0f780f;
    font-weight: bold;
  }
`

export const ButtonToCart = styled.button<{ dependable: boolean }>`
  font-size: 1rem;

  padding: 5px 12px;
  transition: ease-in 0.2s;

  background-color: #131921;
  border: 1px solid #eee;
  border-radius: 5px;
  color: #eee;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color: ${(props) => (props.dependable ? 'red' : '#0f780f')};
    cursor: ${(props) => (props.dependable ? 'not-allowed' : 'pointer')};
  }
`
