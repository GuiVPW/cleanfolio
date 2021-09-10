import uniqid from 'uniqid'

import { ProjectContainer } from '../ProjectContainer'
import { Section, SectionTitle } from '../Section'
import { Grid } from './Projects.styled'

import { projectsData } from '../../data'

export const Projects = () => {
  if (!projectsData.length) return null

  return (
    <Section id='projects'>
      <SectionTitle>Projects</SectionTitle>

      <Grid>
        {projectsData.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </Grid>
    </Section>
  )
}

export default Projects
