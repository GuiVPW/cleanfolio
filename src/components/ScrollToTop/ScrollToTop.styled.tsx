import styled from 'styled-components'

export const ScrollContainer = styled.div`
  position: fixed;
  bottom: 2em;
  right: 4em;
  background-color: transparent;

  @media only screen and (max-width: 900px) {
    display: none;
  }
`
