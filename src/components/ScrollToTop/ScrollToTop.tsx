import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { ScrollContainer } from './ScrollToTop.styled'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return isVisible ? (
    <ScrollContainer>
      <a href='#top'>
        <ArrowUpwardIcon fontSize='large' />
      </a>
    </ScrollContainer>
  ) : (
    <></>
  )
}

export default ScrollToTop
