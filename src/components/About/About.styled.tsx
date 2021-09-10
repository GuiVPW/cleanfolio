import styled from 'styled-components'
import { Link } from '../Link'
import { Button } from '../Button'

export const AboutContainer = styled.div`
  flex-direction: column;
  margin-top: 3em;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
    margin-top: 2em;
  }
`

export const Name = styled.span`
  color: ${(props) => props.theme.primary};
`

export const Role = styled.h2`
  margin-top: 1.2em;
`

export const Description = styled.p`
  font-size: 1rem;
  max-width: 600px;
  margin-top: 2.4em;
`

export const Contact = styled.div`
  margin-top: 2.4em;
`

export const AboutLink = styled(Link)`
  ${(props) => props.type === 'icon' && { marginRight: '0.8em' }}
`

export const AboutButton = styled(Button)`
  ${(props) => props.buttonType === 'outline' && { marginRight: '1em' }}
`
