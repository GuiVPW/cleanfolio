import uniqid from 'uniqid'

import { skillsData } from '../../data'

import { Section, SectionTitle } from '../Section'
import { Button } from '../Button'
import { SkillsList } from './Skills.styled'

export const Skills = () => {
  if (!skillsData.length) return null

  return (
    <Section id='skills'>
      <SectionTitle>Skills</SectionTitle>
      <SkillsList>
        {skillsData.map((skill) => (
          <li key={uniqid()}>
            <Button buttonType='plain'>{skill}</Button>
          </li>
        ))}
      </SkillsList>
    </Section>
  )
}

export default Skills
