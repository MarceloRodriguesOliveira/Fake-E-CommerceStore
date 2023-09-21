import { FaGithub, FaLinkedin } from 'react-icons/fa'

import * as S from '../styles/Footer.styles'

function Footer() {
  return (
    <S.Container>
      <S.Socials>
        <li>
          <a
            href="https://github.com/MarceloRodriguesOliveira"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marcelo-rodrigues-eng/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </S.Socials>
      <p>Fake Commerce Store © todos os direitos reservados.</p>
    </S.Container>
  )
}

export default Footer
