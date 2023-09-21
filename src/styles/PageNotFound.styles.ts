import styled from 'styled-components'

export const ErrorContainer = styled.div`
  margin: auto;
  text-align: center;
  color: #131921;
  padding: 15px;
  min-width: 260px;

  h1 {
    font-size: 5rem;
    text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee,
      3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee,
      5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee,
      7px 6px 1px #ccc;
  }

  p {
    font-weight: bolder;
    letter-spacing: 2px;
  }
`
