import { ProjectModel } from '../models'

// Projects can be added and removed
// if there are no projects, Projects section won't show up
export const projectsData: ProjectModel[] = [
  {
    name: 'Project',
    description: 'Top',
    sourceCode: 'http://',
    stack: ['Next.js'],
    livePreview: 'http://',
  },
]
