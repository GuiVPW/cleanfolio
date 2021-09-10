import uniqid from 'uniqid'

import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

import { Project, Description, Stack } from './ProjectContainer.styled'

import { Link } from '../Link'
import { ProjectModel } from '../../models'

export const ProjectContainer = ({ project }: { project: ProjectModel }) => (
  <Project>
    <h3>{project.name}</h3>

    <Description>{project.description}</Description>
    {project.stack && (
      <Stack>
        {project.stack.map((item) => (
          <li key={uniqid()}>{item}</li>
        ))}
      </Stack>
    )}

    {project.sourceCode && (
      <Link
        type='icon'
        target='_blank'
        rel='noreferrer noopener'
        href={project.sourceCode}
        aria-label='source code'
      >
        <GitHubIcon />
      </Link>
    )}

    {project.livePreview && (
      <Link
        type='icon'
        target='_blank'
        rel='noreferrer noopener'
        href={project.livePreview}
        aria-label='live preview'
      >
        <LaunchIcon />
      </Link>
    )}
  </Project>
)

export default ProjectContainer
