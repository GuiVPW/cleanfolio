import styled from 'styled-components'
import { Button } from '../Button'

export const NavList = styled.ul.withConfig<{ show?: boolean }>({
  shouldForwardProp: (prop) => !['show'].includes(prop),
})`
  margin-right: 1.5em;
  display: flex;

  li {
    margin-left: 1.5em;
  }

  @media only screen and (max-width: 600px) {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    li {
      margin: 0.5em 0;
    }
  }
`

export const NavHamburguer = styled(Button)`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    z-index: 2;
    margin-left: 0.8em;
  }
`
