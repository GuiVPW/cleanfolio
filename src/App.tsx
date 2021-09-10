import { AppContainer, Main } from './App.styled'

import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { ScrollToTop } from './components/ScrollToTop'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const App = () => (
  <AppContainer id='top'>
    <Header />

    <Main>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Main>

    <ScrollToTop />
    <Footer />
  </AppContainer>
)

export default App
