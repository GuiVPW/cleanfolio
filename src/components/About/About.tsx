import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { aboutData } from '../../data'

import {
  AboutButton,
  AboutContainer,
  AboutLink,
  Contact,
  Description,
  Name,
  Role,
} from './About.styled'

export const About = () => {
  const { name, role, description, resume, social } = aboutData

  return (
    <AboutContainer className='center'>
      {name && (
        <h1>
          Hi, I am <Name>{name}.</Name>
        </h1>
      )}

      {role && <Role>A {role}.</Role>}
      <Description>{description && description}</Description>

      <Contact className='center'>
        {resume && (
          <a href={resume}>
            <AboutButton buttonType='outline'>Resume</AboutButton>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <AboutLink type='icon' href={social.github} aria-label='github'>
                <GitHubIcon />
              </AboutLink>
            )}

            {social.linkedin && (
              <AboutLink
                type='icon'
                href={social.linkedin}
                aria-label='linkedin'
              >
                <LinkedInIcon />
              </AboutLink>
            )}
          </>
        )}
      </Contact>
    </AboutContainer>
  )
}

export default About
