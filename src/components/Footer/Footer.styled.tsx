import styled from 'styled-components'
import { Link } from '../Link'

export const FooterContainer = styled.footer`
  padding: 3em 0;
  margin-top: 4em;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 2em;
    margin-top: 3em;
  }
`

export const FooterLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) => props.theme.foreground.main};
`
