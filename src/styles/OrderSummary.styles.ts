import styled from 'styled-components'

export const Container = styled.div`
  min-width: 360px;
  width: min(900px, 100% - 3rem);
  /* width: 100%; */
  margin-inline: auto;
  padding: 1rem 2rem;

  table {
    width: 100%;
    /* margin: 0 auto; */
    border-collapse: collapse;
    /* background: #323232; */
    /* border: 1px solid #d3d3d3; */
  }

  caption,
  th,
  td {
    /* padding: 1rem; */
    /* color: white; */
    /* border: 1px solid black; */
  }

  /* caption,
  th {
    text-align: left;
  } */

  /* tr th:first-child {
    text-align: left;
  } */

  caption {
    background: hsl(0 0% 0%);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  /* th {
    background: #8888;
  } */

  tr:nth-of-type(2n) {
    /* background: hsl(0 0% 0% / 1); */
    background-color: #f0f0f0;
  }

  tr td:first-child {
    /* max-width: 30rem; */
  }

  @media (max-width: 650px) {
    p {
      text-align: justify;
      word-break: break-word;
    }
    th {
      display: none;
    }
    td {
      width: auto;
      display: grid;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
    }

    tr > td:first-of-type {
      align-items: center;
      /* justify-content: space-evenly; */
      /* background-color: red; */
    }
    tr > td:not(:first-child) {
      /* background-color: blue; */
      justify-content: space-between;
    }

    td::before {
      content: attr(data-cell) ': ';
      font-weight: 700;
      text-transform: capitalize;

      /* width: fit-content; */
    }
  }

  @media (max-width: 400px) {
    tr > td:not(:first-child) {
      /* background-color: blue; */
    }
  }
`

export const ProdutoContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  word-break: break-word;
  padding: 0.5rem;

  gap: 12px;

  img {
    width: 55px;
    max-height: 55px;
  }

  span {
    display: flex;
    border-radius: 50%;
    border: 1px solid #eee;
    font-size: 1rem;
  }

  span:hover {
    cursor: pointer;
    color: rgba(246, 71, 71, 1);
    text-align: center;
    border-radius: 50%;
    border: 1px solid #fff;

    box-shadow: 0 0 0 3px rgba(246, 71, 71, 1);
  }

  p {
    font-size: 1rem;

    width: 100%;

    text-align: center;
  }

  @media (max-width: 650px) {
    span {
      display: none;
    }
  }

  @media (max-width: 400px) {
    span {
      display: none;
    }
    p {
      font-size: 3.5vw;
      text-align: justify;
    }
    img {
      max-width: 35px;
      max-height: 35px;
    }
  }
`
export const Headers = styled.tr`
  background-color: #d3d3d3;
  border: 1px solid silver;

  th {
    padding: 0.5rem;
    font-size: 1rem;
    color: #1a1110;
    text-align: left;
    border-right: 1px solid silver;
  }
`

export const OrderInfo = styled.tr`
  border: 1px solid silver;

  td {
    padding: 0.5rem;
    border: 1px solid silver;
  }
`

export const Price = styled.td`
  font-weight: 700;
  font-size: 1.1rem;
`

export const PriceSubtotal = styled.td`
  font-weight: 700;
  font-size: 1.1rem;

  color: #343434;
`

export const Qtd = styled.td`
  width: 7.5rem;
  /* div {
    margin: auto;
  } */
`

export const QtdContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    font-size: 1rem;
  }

  button {
    border: 1px solid #eee;
    display: flex;
    place-items: center;
    font-size: 1.2rem;
    background: none;

    border-radius: 50%;

    text-align: center;
    cursor: pointer;
  }

  button:first-of-type:hover {
    transition: 0.2s ease-out;
    color: green;
    box-shadow: 0 0 0 3px rgba(147, 250, 165, 1);
  }

  button:nth-of-type(2):hover {
    transition: 0.2s ease-out;
    color: red;
    box-shadow: 0 0 0 3px rgba(246, 71, 71, 1);
  }
`

export const NoOrders = styled.h1`
  margin: auto;
  /* border: 1px solid black; */
  text-align: center;
  color: #8888;

  opacity: 0.7;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 15px 0px;
`
