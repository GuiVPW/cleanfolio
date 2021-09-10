import styled from 'styled-components'

export const Project = styled.div`
  padding: 2em;
  margin: 0 auto;
  text-align: center;
  box-shadow: ${(props) => props.theme.shadow};
  transition: transform 0.2s linear;

  &:hover {
    transform: translateY(-7px);
  }

  a {
    margin-left: 0.5em;
  }
`

export const Description = styled.p`
  margin-top: 1em;
`

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.2em 0;

  li {
    margin: 0.5em;
    font-weight: 500;
    font-size: 0.8rem;
    color: ${(props) => props.theme.foreground.alt};
  }
`
