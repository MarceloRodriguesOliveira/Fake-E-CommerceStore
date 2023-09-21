import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: auto;
  min-width: 300px;
  background-color: #131921;

  p {
    text-align: center;
    padding-bottom: 10px;
    color: #ffff;
  }
`
export const Socials = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 5px;

  li > a {
    transition: 0.2s ease-out;
    color: #ffff;
    font-size: 1.5rem;
    cursor: pointer;
  }

  a:hover {
    color: #ff5510;
  }
`
