import { AiOutlineClose } from 'react-icons/ai'

import * as S from '../styles/Modal.styles'

interface IModal {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
  id: number
  removeProduct: (id: number) => void
}

export function Modal({ isOpen, setOpen, id, removeProduct }: IModal) {
  if (isOpen) {
    return (
      <S.Background>
        <S.Modal>
          <h2>Alerta de exclusão de produto</h2>
          <p>Tem certeza que gostaria de remover o produto?</p>
          {/* <S.CloseButton onClick={() => setOpen(!isOpen)}>
            <AiOutlineClose />
          </S.CloseButton> */}
          <S.ButtonContainer>
            <S.DeleteButton
              onClick={() => {
                removeProduct(id), setOpen(!isOpen)
              }}
            >
              Sim
            </S.DeleteButton>
            <S.CloseButton onClick={() => setOpen(!isOpen)}>Não</S.CloseButton>
          </S.ButtonContainer>
        </S.Modal>
      </S.Background>
    )
  } else {
    return <></>
  }
}
