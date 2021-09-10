import { headerData } from '../../data'

import { Navbar } from '../Navbar/Navbar'
import { Link } from '../Link'
import { HeaderContainer } from './Header.styled'

export const Header = () => {
  const { homepage, title } = headerData

  return (
    <HeaderContainer className='center'>
      <h3>
        {homepage ? (
          <Link href={homepage} type='normal'>
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </HeaderContainer>
  )
}

export default Header
