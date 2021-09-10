import { useContext, useState } from 'react'

import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import { ThemeContext } from '../../contexts/theme'

import { projectsData, skillsData, contactData } from '../../data'

import { Button } from '../Button'
import { Link } from '../Link'
import { NavHamburguer, NavList } from './Navbar.styled'

export const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  if (!contactData.email) return null

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center'>
      <NavList style={{ display: showNavList ? 'flex' : undefined }}>
        {projectsData.length && (
          <li>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              type='nav'
              href='#projects'
              onClick={toggleNavList}
            >
              Projects
            </Link>
          </li>
        )}

        {skillsData.length && (
          <li>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              type='nav'
              href='#skills'
              onClick={toggleNavList}
            >
              Skills
            </Link>
          </li>
        )}

        {contactData.email && (
          <li>
            <Link
              target='_blank'
              rel='noreferrer noopener'
              type='nav'
              href='#contact'
              onClick={toggleNavList}
            >
              Contact
            </Link>
          </li>
        )}
      </NavList>

      <Button
        buttonType='icon'
        type='button'
        onClick={toggleTheme}
        className='center'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </Button>

      <NavHamburguer
        buttonType='icon'
        type='button'
        onClick={toggleNavList}
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </NavHamburguer>
    </nav>
  )
}

export default Navbar
