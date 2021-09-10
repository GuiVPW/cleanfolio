import styled from 'styled-components'

export const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  color: ${(props) => props.theme.foreground.main};
  background-color: ${(props) => props.theme.background.main};

  .center {
    display: flex;
    align-items: center;
  }
`

export const Main = styled.main`
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;
`
