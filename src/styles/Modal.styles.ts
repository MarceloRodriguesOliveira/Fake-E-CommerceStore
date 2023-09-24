import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.624);
`
export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eee;
  padding: 3rem 2rem;
  border-radius: 8px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  button:hover {
    cursor: pointer;
  }

  h2,
  p {
    padding: 0.5rem 0;
    text-align: center;
    color: black;
  }

  h2 {
    font-size: 1.6rem;
  }

  p {
    font-size: 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem 10px;
  gap: 10px;

  button {
    border: 1px solid silver;
    padding: 5px 2px;
    font-weight: bold;
  }
`

export const DeleteButton = styled.button`
  flex: 1;
  color: red;
`
export const CloseButton = styled.button`
  flex: 1;
  color: green;
`
